(function () {
    var canvas = document.getElementById('bg-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');

    /* ================================================================
       Layout — recomputed on every resize
       ================================================================ */
    var W, H, BHX, BHY, RH, EXT, BOB_X, BOB_Y, sc;

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
        BHX   = Math.round(W / 3);
        BHY   = Math.round(H / 2);
        RH    = Math.round(H * 0.239);    // horizon radius ∝ canvas height
        EXT   = Math.round(W * 0.0995);   // exterior px/unit ∝ canvas width
        BOB_X = BHX + rPx(6);
        BOB_Y = BHY;
        sc    = H / 440;                  // scale factor for sizes, fonts, offsets
    }

    function rPx(r) {
        if (r <= 0) return 0;
        if (r <= 1) return r * RH;
        return RH + (r - 1) * EXT;
    }

    /* Scaled font string */
    function fs(n) { return Math.round(n * sc) + 'px'; }

    /* ----------------------------------------------------------------
       Stars — stored as relative [0,1] positions so resize is free
       ---------------------------------------------------------------- */
    var stars = (function () {
        var arr = [], seed = 42;
        function rand() {
            seed = (seed * 1664525 + 1013904223) & 0xffffffff;
            return (seed >>> 0) / 4294967296;
        }
        for (var i = 0; i < 240; i++) {
            arr.push({ rx: rand(), ry: rand(), s: rand() * 1.4 + 0.4, a: rand() * 0.5 + 0.35 });
        }
        return arr;
    }());

    /* ================================================================
       Drawing helpers
       ================================================================ */

    function drawBg() {
        ctx.fillStyle = '#07071a';
        ctx.fillRect(0, 0, W, H);
    }

    function drawStars() {
        stars.forEach(function (s) {
            var x = s.rx * W, y = s.ry * H;
            var dx = x - BHX, dy = y - BHY;
            if (dx * dx + dy * dy < (RH + 5) * (RH + 5)) return;
            ctx.beginPath();
            ctx.arc(x, y, s.s * sc, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + s.a + ')';
            ctx.fill();
        });
    }

    function drawAxis() {
        var x5  = BHX + rPx(5);
        var sqL = x5 + 14 * sc;
        var sqR = BOB_X - 22 * sc;
        var mx  = (sqL + sqR) / 2;
        var tk  = 7 * sc;   // tick half-height

        ctx.beginPath();
        ctx.moveTo(BHX + RH + 2, BHY);
        ctx.lineTo(x5, BHY);
        ctx.strokeStyle = 'rgba(255,255,255,0.13)';
        ctx.lineWidth = sc;
        ctx.setLineDash([6 * sc, 5 * sc]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.moveTo(sqL, BHY);
        ctx.lineTo(mx - 9 * sc, BHY);
        ctx.lineTo(mx - 3 * sc, BHY - 10 * sc);
        ctx.lineTo(mx + 3 * sc, BHY + 10 * sc);
        ctx.lineTo(mx + 9 * sc, BHY);
        ctx.lineTo(sqR, BHY);
        ctx.strokeStyle = 'rgba(255,255,255,0.38)';
        ctx.lineWidth = 1.5 * sc;
        ctx.stroke();

        [2, 3, 4, 5].forEach(function (r) {
            var x = BHX + rPx(r);
            ctx.beginPath();
            ctx.moveTo(x, BHY - tk); ctx.lineTo(x, BHY + tk);
            ctx.strokeStyle = 'rgba(255,255,255,0.22)';
            ctx.lineWidth = sc; ctx.stroke();
            ctx.font = fs(9) + ' monospace';
            ctx.fillStyle = 'rgba(255,255,255,0.28)';
            ctx.textAlign = 'center';
            ctx.fillText('r\u202f=\u202f' + r, x, BHY + 33 * sc);
        });

        ctx.beginPath();
        ctx.moveTo(BOB_X, BHY - tk); ctx.lineTo(BOB_X, BHY + tk);
        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        ctx.lineWidth = sc; ctx.stroke();
        ctx.font = fs(9) + ' monospace';
        ctx.fillStyle = 'rgba(255,255,255,0.28)';
        ctx.textAlign = 'center';
        ctx.fillText('r \u2192 \u221e', BOB_X, BHY + 33 * sc);
    }

    function drawBH() {
        var dotR = Math.max(2, 3 * sc);

        ctx.beginPath();
        ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
        ctx.fillStyle = '#030310';
        ctx.fill();

        ctx.shadowBlur = 18 * sc;
        ctx.shadowColor = '#ffd060';
        ctx.beginPath();
        ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffdd66';
        ctx.lineWidth = 2.5 * sc;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(BHX, BHY, dotR, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fill();

        ctx.font = fs(10) + ' monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,220,100,0.6)';
        ctx.fillText('r\u202f=\u202f0', BHX, BHY + 15 * sc);

        ctx.font = fs(9) + ' monospace';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgba(255,220,100,0.55)';
        ctx.fillText('r\u202f=\u202f1', BHX + RH + 5 * sc, BHY - RH * 0.5);
        ctx.fillText('(horizon)', BHX + RH + 5 * sc, BHY - RH * 0.5 + 13 * sc);
    }

    function drawDot(x, y, label, color) {
        var r = 9 * sc;
        ctx.shadowBlur = 12 * sc;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold ' + fs(10) + ' sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label.charAt(0), x, y + 4 * sc);
        ctx.fillStyle = color;
        ctx.font = fs(10) + ' sans-serif';
        ctx.fillText(label, x, y - 15 * sc);
    }

    function drawBobStd() {
        drawDot(BOB_X, BOB_Y, 'Bob', '#4fc3f7');
        ctx.font = fs(9) + ' monospace';
        ctx.fillStyle = 'rgba(79,195,247,0.55)';
        ctx.textAlign = 'center';
        ctx.fillText('r \u226b 1', BOB_X, BOB_Y + 22 * sc);
    }

    function drawAlice(r, rLabel) {
        var ax = BHX + rPx(r), ay = BHY;
        drawDot(ax, ay, 'Alice', '#ef5350');
        if (rLabel) {
            ctx.font = fs(9) + ' monospace';
            ctx.fillStyle = 'rgba(239,83,80,0.65)';
            ctx.textAlign = 'center';
            ctx.fillText(rLabel, ax, ay + 22 * sc);
        }
        return { x: ax, y: ay };
    }

    function drawPath(startR, endR) {
        ctx.beginPath();
        ctx.moveTo(BHX + rPx(startR), BHY);
        ctx.lineTo(BHX + rPx(endR), BHY);
        ctx.setLineDash([4 * sc, 5 * sc]);
        ctx.strokeStyle = 'rgba(239,83,80,0.28)';
        ctx.lineWidth = 1.5 * sc;
        ctx.stroke();
        ctx.setLineDash([]);
    }

    function drawTitle(text) {
        ctx.font = 'bold ' + fs(13) + ' sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.88)';
        ctx.textAlign = 'center';
        ctx.fillText(text, W / 2, 22 * sc);
    }

    function arrowLeft(x0, x1, y, color) {
        var hw = 5 * sc, ht = 7 * sc;
        ctx.beginPath();
        ctx.moveTo(x0, y); ctx.lineTo(x1, y);
        ctx.strokeStyle = color; ctx.lineWidth = 1.5 * sc; ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x1 + ht, y - hw); ctx.lineTo(x1, y); ctx.lineTo(x1 + ht, y + hw);
        ctx.strokeStyle = color; ctx.lineWidth = 1.5 * sc; ctx.stroke();
    }

    /* Highway perspective road — VP = singularity at (BHX, BHY).
       Road fills the lower half of the canvas; axis = horizon line.
       Always drawn (no toggle) in this engine. */
    function drawRoad() {
        var f      = H - BHY;   // focal length: VP to canvas bottom
        var spread = H;          // road half-width at canvas bottom (scales with H)

        ctx.lineWidth = 1.2 * sc;
        ctx.strokeStyle = 'rgba(255,215,70,0.62)';
        ctx.beginPath(); ctx.moveTo(BHX, BHY); ctx.lineTo(BHX - spread, H); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(BHX, BHY); ctx.lineTo(BHX + spread, H); ctx.stroke();

        for (var ki = 1; ki <= 12; ki++) {
            var yn = BHY + f / ki;
            var yf = BHY + f / (ki + 0.55);
            if (yn > H) yn = H;
            if (yf <= BHY) break;

            var fn = (yn - BHY) / f;
            var ff = (yf - BHY) / f;
            var hwn = spread * fn;
            var hwf = spread * ff;

            var cwn = Math.max(0.2 * sc, hwn * 0.012);
            var cwf = Math.max(0.1 * sc, hwf * 0.012);
            ctx.fillStyle = 'rgba(255,240,120,0.82)';
            ctx.beginPath();
            ctx.moveTo(BHX - cwf, yf); ctx.lineTo(BHX + cwf, yf);
            ctx.lineTo(BHX + cwn, yn); ctx.lineTo(BHX - cwn, yn);
            ctx.closePath(); ctx.fill();

            var lf  = 0.42;
            var lwn = Math.max(0.2 * sc, hwn * 0.012);
            var lwf = Math.max(0.1 * sc, hwf * 0.012);
            ctx.fillStyle = 'rgba(255,255,255,0.42)';
            [-1, 1].forEach(function (s) {
                var lxn = BHX + s * hwn * lf;
                var lxf = BHX + s * hwf * lf;
                ctx.beginPath();
                ctx.moveTo(lxf - lwf, yf); ctx.lineTo(lxf + lwf, yf);
                ctx.lineTo(lxn + lwn, yn); ctx.lineTo(lxn - lwn, yn);
                ctx.closePath(); ctx.fill();
            });
        }
    }

    /* ================================================================
       Slides
       ================================================================ */
    var slides = [

        /* 0 — Before the Fall */
        {
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                var ax = BOB_X - 24 * sc, ay = BHY;
                var bx = BOB_X,           by = BHY - 22 * sc;
                drawDot(ax, ay, 'Alice', '#ef5350');
                drawDot(bx, by, 'Bob',   '#4fc3f7');
                ctx.font = fs(10) + ' monospace';
                ctx.fillStyle = 'rgba(255,255,255,0.38)';
                ctx.textAlign = 'center';
                ctx.fillText('r \u2192 \u221e', (ax + bx) / 2, ay + 38 * sc);
                ctx.beginPath();
                ctx.arc((ax + bx) / 2, (ay + by) / 2, 36 * sc, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255,255,255,0.06)';
                ctx.lineWidth = sc;
                ctx.stroke();
                arrowLeft(ax - 12 * sc, ax - 55 * sc, ay, 'rgba(239,83,80,0.6)');
                drawTitle('Before the Fall  (r \u2192 \u221e)');
            }
        },

        /* 1 — Mid-Descent */
        {
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                drawPath(5.9, 2.3);
                var a = drawAlice(2.3, 'r \u2248 2.3');
                drawBobStd();
                ctx.beginPath();
                for (var i = 0; i <= 36; i++) {
                    var t  = i / 36;
                    var sx = a.x + (BOB_X - a.x) * t;
                    var sy = BHY + Math.sin(t * Math.PI * 11) * 6 * sc * t;
                    if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
                }
                drawTitle('Mid-Descent  (r > 1)');
            }
        },

        /* 2 — At the Horizon */
        {
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                drawPath(5.9, 1.0);
                var a = drawAlice(1.0, 'r = 1');
                drawBobStd();
                ctx.beginPath();
                ctx.moveTo(BOB_X, BOB_Y); ctx.lineTo(a.x, a.y);
                drawTitle('At the Horizon  (r = 1)');
            }
        },

        /* 3 — Inside the Horizon */
        {
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                drawPath(5.9, 0.5);
                drawAlice(0.5, 'r \u2248 0.5');
                drawBobStd();
                drawTitle('Inside the Horizon  (r < 1)');
            }
        },

        /* 4 — Vacuum Singularity */
        {
            draw: function () {
                drawBg();
                [0.25, 0.5, 1.0, 2.0, 3.5].forEach(function (r) {
                    ctx.beginPath();
                    ctx.arc(BHX, BHY, rPx(r), 0, Math.PI * 2);
                    ctx.strokeStyle = r <= 1 ? 'rgba(255,100,80,0.22)' : 'rgba(255,100,80,0.10)';
                    ctx.lineWidth = 0.8 * sc;
                    ctx.setLineDash([4 * sc, 7 * sc]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    if (r === 1.0) {
                        ctx.font = fs(9) + ' monospace';
                        ctx.fillStyle = 'rgba(255,130,80,0.50)';
                        ctx.textAlign = 'left';
                        ctx.fillText('r\u202f=\u202f1', BHX + rPx(1) + 5 * sc, BHY - 10 * sc);
                    }
                });
                ctx.beginPath();
                ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(3,3,16,0.82)';
                ctx.fill();
                drawStars();
                ctx.shadowBlur = 30 * sc;
                ctx.shadowColor = '#ff3333';
                ctx.beginPath();
                ctx.arc(BHX, BHY, 6 * sc, 0, Math.PI * 2);
                ctx.fillStyle = '#ff4444';
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(255,110,110,0.88)';
                ctx.font = 'bold ' + fs(10) + ' monospace';
                ctx.textAlign = 'center';
                ctx.fillText('r\u202f=\u202f0', BHX, BHY + 18 * sc);
                ctx.fillStyle = 'rgba(255,160,160,0.65)';
                ctx.font = fs(10) + ' monospace';
                ctx.fillText('\u03c4\u202f=\u202f2/3', BHX, BHY + 31 * sc);
                var alX = BHX + rPx(0.4), alY = BHY;
                ctx.shadowBlur = 12 * sc; ctx.shadowColor = '#ef5350';
                ctx.beginPath(); ctx.arc(alX, alY, 9 * sc, 0, Math.PI * 2);
                ctx.fillStyle = '#ef5350'; ctx.fill(); ctx.shadowBlur = 0;
                ctx.fillStyle = '#fff'; ctx.font = 'bold ' + fs(10) + ' sans-serif'; ctx.textAlign = 'center';
                ctx.fillText('A', alX, alY + 4 * sc);
                ctx.fillStyle = '#ef5350';
                ctx.fillText('Alice', alX, alY - 16 * sc);
                arrowLeft(alX - 12 * sc, BHX + 10 * sc, alY, 'rgba(239,83,80,0.72)');
                drawBobStd();

                drawAxis();
                drawTitle('Vacuum Schwarzschild \u2014 Singularity at r\u00a0=\u00a00');
            }
        },

        /* 5 — The Vanishing Point */
        {
            draw: function () {
                drawBg(); drawStars();
                [0.25, 0.5, 1.0, 2.0, 3.5].forEach(function (r) {
                    ctx.beginPath();
                    ctx.arc(BHX, BHY, rPx(r), 0, Math.PI * 2);
                    ctx.strokeStyle = r <= 1 ? 'rgba(255,220,80,0.18)' : 'rgba(255,220,80,0.09)';
                    ctx.lineWidth = 0.8 * sc;
                    ctx.setLineDash([4 * sc, 7 * sc]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    if (r === 1.0) {
                        ctx.font = fs(9) + ' monospace';
                        ctx.fillStyle = 'rgba(255,220,80,0.48)';
                        ctx.textAlign = 'left';
                        ctx.fillText('r\u202f=\u202f1', BHX + rPx(1) + 5 * sc, BHY - 10 * sc);
                    }
                });
                ctx.beginPath();
                ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(3,3,16,0.82)';
                ctx.fill();
                ctx.shadowBlur = 30 * sc; ctx.shadowColor = '#ffcc44';
                ctx.beginPath();
                ctx.arc(BHX, BHY, 5 * sc, 0, Math.PI * 2);
                ctx.fillStyle = '#ffdd55'; ctx.fill(); ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(255,220,80,0.88)';
                ctx.font = 'bold ' + fs(10) + ' monospace';
                ctx.textAlign = 'center';
                ctx.fillText('r\u202f=\u202f0', BHX, BHY + 18 * sc);
                ctx.fillStyle = 'rgba(255,200,80,0.65)';
                ctx.font = fs(10) + ' monospace';
                ctx.fillText('\u03c4 \u2192 \u221e', BHX, BHY + 31 * sc);
                var alX = BHX + rPx(0.4), alY = BHY;
                ctx.shadowBlur = 12 * sc; ctx.shadowColor = '#ef5350';
                ctx.beginPath(); ctx.arc(alX, alY, 9 * sc, 0, Math.PI * 2);
                ctx.fillStyle = '#ef5350'; ctx.fill(); ctx.shadowBlur = 0;
                ctx.fillStyle = '#fff'; ctx.font = 'bold ' + fs(10) + ' sans-serif'; ctx.textAlign = 'center';
                ctx.fillText('A', alX, alY + 4 * sc);
                ctx.fillStyle = '#ef5350';
                ctx.fillText('Alice', alX, alY - 16 * sc);
                arrowLeft(alX - 12 * sc, alX - 40 * sc, alY, 'rgba(239,83,80,0.55)');
                drawBobStd();
                drawAxis();
                drawRoad();
                drawTitle('The Vanishing Point  (PG Interior: \u03c4 \u2192 \u221e)');
            }
        }

    ]; /* end slides */

    /* ================================================================
       Controller — with crossfade
       ================================================================ */
    var current = 0;
    var animId  = null;
    var FADE_MS = 380;

    /* Off-screen canvas holds the outgoing frame during a crossfade */
    var offCvs  = document.createElement('canvas');
    var offCtx2 = offCvs.getContext('2d');

    function render() {
        ctx.clearRect(0, 0, W, H);
        slides[current].draw();
    }

    function fadeTo(n) {
        if (n === current) return;

        /* Snapshot the outgoing frame */
        offCvs.width  = W;
        offCvs.height = H;
        offCtx2.drawImage(canvas, 0, 0);

        current = n; /* incoming slide — drawn fresh each animation frame */

        if (animId) { cancelAnimationFrame(animId); animId = null; }

        var startTs = null;
        function frame(ts) {
            if (!startTs) startTs = ts;
            var t = Math.min((ts - startTs) / FADE_MS, 1);

            ctx.clearRect(0, 0, W, H);
            slides[current].draw();

            if (t < 1) {
                ctx.globalAlpha = 1 - t;
                ctx.drawImage(offCvs, 0, 0);
                ctx.globalAlpha = 1;
                animId = requestAnimationFrame(frame);
            } else {
                animId = null;
            }
        }
        animId = requestAnimationFrame(frame);
    }

    /* Public API */
    window.leapOfFaith = {
        goToSlide: function (n) {
            n = Math.max(0, Math.min(n, slides.length - 1));
            fadeTo(n);
        },
        slideCount: slides.length
    };

    window.addEventListener('resize', function () {
        if (animId) { cancelAnimationFrame(animId); animId = null; }
        resize();
        render();
    });

    resize();
    render();
}());
