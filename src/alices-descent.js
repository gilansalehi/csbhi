(function () {
    var canvas = document.getElementById('alice-canvas');
    var caption = document.getElementById('alice-caption');
    var counter = document.getElementById('alice-counter');
    var btnPrev = document.getElementById('alice-btn-prev');
    var btnNext = document.getElementById('alice-btn-next');

    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext('2d');

    var RH          = 105;  // px per r-unit; event-horizon radius
    var GRID_UNIT   = RH;   // single scale used everywhere — never mix with anything else
    var LEFT_UNITS  = 3;    // r-units visible left  of the singularity
    var RIGHT_UNITS = 7;    // r-units visible right of the singularity

    /* Canvas dimensions derived from coordinate range — changing LEFT/RIGHT_UNITS
       automatically resizes the canvas and repositions every element. */
    canvas.width  = (LEFT_UNITS + RIGHT_UNITS) * GRID_UNIT;  // 1050
    canvas.height = 440;

    var W   = canvas.width;              // 1050
    var H   = canvas.height;             // 440
    var BHX = LEFT_UNITS * GRID_UNIT;   // 210 — singularity x-position
    var BHY = Math.round(H / 2);        // 220

    var starsOn      = true;
    var roadOn       = true;
    var gridMode     = 'off'; // 'off' | 'radial' | 'square'
    var localFrameOn = false;

    /* Map geometric r → pixels from BH centre. Uniform single scale. */
    function rPx(r) {
        return Math.max(0, r * GRID_UNIT);
    }

    /* Bob's fixed screen position — placed at r = 6 in the diagram,
       but representing the Schwarzschild observer "at infinity". */
    var BOB_X = BHX + rPx(6);
    var BOB_Y = BHY;

    /* ---- pre-seed random stars ---- */
    var stars = (function () {
        var arr = [];
        var seed = 42;
        function rand() { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 4294967296; }
        for (var i = 0; i < 200; i++) {
            arr.push({ x: rand() * W, y: rand() * H, s: rand() * 1.3 + 0.3, a: rand() * 0.5 + 0.4 });
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
        if (!starsOn) return;
        stars.forEach(function (s) {
            var dx = s.x - BHX, dy = s.y - BHY;
            if (dx * dx + dy * dy < (RH + 5) * (RH + 5)) return;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.s, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + s.a + ')';
            ctx.fill();
        });
    }

    /* Horizontal r-axis with tick marks and a scale-break squiggle at r = 5. */
    function drawAxis() {
        var x5  = BHX + rPx(5);
        var sqL = x5 + 14;
        var sqR = BOB_X - 22;
        var mx  = (sqL + sqR) / 2;

        /* dashed axis segment: horizon → r = 5 */
        ctx.beginPath();
        ctx.moveTo(BHX + rPx(1) + 2, BHY);
        ctx.lineTo(x5, BHY);
        ctx.strokeStyle = 'rgba(255,255,255,0.13)';
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        /* scale-break squiggle: r = 5 → Bob (represents r → ∞) */
        ctx.beginPath();
        ctx.moveTo(sqL, BHY);
        ctx.lineTo(mx - 9, BHY);
        ctx.lineTo(mx - 3, BHY - 10);
        ctx.lineTo(mx + 3, BHY + 10);
        ctx.lineTo(mx + 9, BHY);
        ctx.lineTo(sqR, BHY);
        ctx.strokeStyle = 'rgba(255,255,255,0.38)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        /* tick marks and labels at r = 2, 3, 4, 5 */
        [2, 3, 4, 5].forEach(function (r) {
            var x = BHX + rPx(r);
            ctx.beginPath();
            ctx.moveTo(x, BHY - 7); ctx.lineTo(x, BHY + 7);
            ctx.strokeStyle = 'rgba(255,255,255,0.22)';
            ctx.lineWidth = 1; ctx.stroke();
            ctx.font = '9px monospace';
            ctx.fillStyle = 'rgba(255,255,255,0.28)';
            ctx.textAlign = 'center';
            ctx.fillText('r\u202f=\u202f' + r, x, BHY + 33);
        });

        /* Bob's tick — no label (squiggle already signals r → ∞) */
        ctx.beginPath();
        ctx.moveTo(BOB_X, BHY - 7); ctx.lineTo(BOB_X, BHY + 7);
        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        ctx.lineWidth = 1; ctx.stroke();
    }

    function drawBH() {
        /* dark interior */
        ctx.beginPath();
        ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
        ctx.fillStyle = '#030310';
        ctx.fill();

        /* glowing event-horizon ring */
        ctx.shadowBlur = 18;
        ctx.shadowColor = '#ffd060';
        ctx.beginPath();
        ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffdd66';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        /* singularity dot */
        ctx.beginPath();
        ctx.arc(BHX, BHY, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fill();

        /* r=0 label */
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,220,100,0.6)';
        ctx.fillText('r\u202f=\u202f0', BHX, BHY + 15);

        /* horizon label on the right side of the ring */
        ctx.font = '9px monospace';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgba(255,220,100,0.55)';
        ctx.fillText('r\u202f=\u202f1', BHX + RH + 5, BHY - RH * 0.5);
        ctx.fillText('(horizon)', BHX + RH + 5, BHY - RH * 0.5 + 13);
    }

    function drawDot(x, y, label, color) {
        ctx.shadowBlur = 12;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label.charAt(0), x, y + 4);
        ctx.fillStyle = color;
        ctx.font = '10px sans-serif';
        ctx.fillText(label, x, y - 15);
    }

    function drawBobStd() {
        drawDot(BOB_X, BOB_Y, 'Bob', '#4fc3f7');
        ctx.font = '9px monospace';
        ctx.fillStyle = 'rgba(79,195,247,0.55)';
        ctx.textAlign = 'center';
        ctx.fillText('r \u226b 1', BOB_X, BOB_Y + 22);
    }

    /* draw Alice at geometric coordinate r on the horizontal r-axis */
    function drawAlice(r, rLabel) {
        var ax = BHX + rPx(r), ay = BHY;
        if (localFrameOn) drawAliceGrid(ax, ay, r);
        drawDot(ax, ay, 'Alice', '#ef5350');
        if (rLabel) {
            ctx.font = '9px monospace';
            ctx.fillStyle = 'rgba(239,83,80,0.65)';
            ctx.textAlign = 'center';
            ctx.fillText(rLabel, ax, ay + 22);
        }
        return { x: ax, y: ay };
    }

    /* dashed trail along the r-axis from startR toward the BH */
    function drawPath(startR, endR) {
        ctx.beginPath();
        ctx.moveTo(BHX + rPx(startR), BHY);
        ctx.lineTo(BHX + rPx(endR), BHY);
        ctx.setLineDash([4, 5]);
        ctx.strokeStyle = 'rgba(239,83,80,0.28)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.setLineDash([]);
    }

    function drawTitle(text) {
        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.88)';
        ctx.textAlign = 'center';
        ctx.fillText(text, W / 2, 22);
    }

    /* left-pointing arrow from x0 toward x1 (x1 < x0) at height y */
    function arrowLeft(x0, x1, y, color) {
        ctx.beginPath();
        ctx.moveTo(x0, y); ctx.lineTo(x1, y);
        ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x1 + 7, y - 5); ctx.lineTo(x1, y); ctx.lineTo(x1 + 7, y + 5);
        ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
    }

    /* Radial (polar) coordinate grid — all radii use GRID_UNIT, never rPx() */
    function drawRadialGrid() {
        /* — concentric circles at r = 1, 2, 3, 4, 5 — */
        [1, 2, 3, 4, 5].forEach(function (r) {
            var rpx = r * GRID_UNIT;   // uniform scale: r=1 → RH px, r=2 → 2·RH px …
            var isUnit = (r === 1);
            ctx.beginPath();
            ctx.arc(BHX, BHY, rpx, 0, Math.PI * 2);
            ctx.setLineDash(isUnit ? [4, 4] : [3, 6]);
            ctx.strokeStyle = isUnit
                ? 'rgba(255,255,255,0.60)'
                : 'rgba(255,255,255,0.50)';
            ctx.lineWidth = isUnit ? 1.5 : 0.9;
            ctx.stroke();
            ctx.setLineDash([]);
        });

        /* — radial spokes every 30° — */
        for (var deg = 0; deg < 360; deg += 30) {
            var rad = deg * Math.PI / 180;
            var reach = Math.max(W, H) * 1.5;
            ctx.beginPath();
            ctx.moveTo(BHX, BHY);
            ctx.lineTo(BHX + Math.cos(rad) * reach, BHY + Math.sin(rad) * reach);
            ctx.setLineDash([2, 8]);
            ctx.strokeStyle = 'rgba(255,255,255,0.10)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.setLineDash([]);
        }

        ctx.font = 'bold 9px monospace';
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.textAlign = 'left';
        ctx.fillText('r\u202f=\u202f1  (unit circle)', BHX + RH * 0.707 + 4, BHY - RH * 0.707 - 4);
    }

    /* Flat Cartesian (Minkowski) grid — step = GRID_UNIT so lines align with horizon */
    function drawSquareGrid() {
        var step = GRID_UNIT;        // 105px — same unit as the horizon circle radius
        var horizonX = BHX + GRID_UNIT; // r=1 horizon in grid coordinates

        /* x positions: anchor at horizon, extend outward; stepping back hits BHX (r=0) */
        var xs = [];
        for (var x = horizonX; x <= W; x += step) xs.push(x);
        for (var x2 = horizonX - step; x2 >= 0; x2 -= step) xs.push(x2);

        /* y positions: anchor at BHY, extend up and down */
        var ys = [];
        for (var y = BHY; y <= H; y += step) ys.push(y);
        for (var y2 = BHY - step; y2 >= 0; y2 -= step) ys.push(y2);

        xs.forEach(function (x) {
            var isHorizon = (x === BHX + GRID_UNIT);
            ctx.beginPath();
            ctx.moveTo(x, 0); ctx.lineTo(x, H);
            ctx.setLineDash(isHorizon ? [4, 4] : [3, 6]);
            ctx.strokeStyle = isHorizon ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.50)';
            ctx.lineWidth = isHorizon ? 1.5 : 0.9;
            ctx.stroke();
        });

        ys.forEach(function (y) {
            var isAxis = (y === BHY);
            ctx.beginPath();
            ctx.moveTo(0, y); ctx.lineTo(W, y);
            ctx.setLineDash(isAxis ? [4, 4] : [3, 6]);
            ctx.strokeStyle = isAxis ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.50)';
            ctx.lineWidth = isAxis ? 1.5 : 0.9;
            ctx.stroke();
        });

        ctx.setLineDash([]);

        ctx.font = 'bold 9px monospace';
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.textAlign = 'left';
        ctx.fillText('flat (Minkowski)', BHX + RH * 0.707 + 4, BHY - RH * 0.707 - 4);
    }

    /* Alice's local reference frame — mini-grid clipped around her position.
       Outside (r ≥ 1): flat Cartesian grid (x/y aligned).
       Inside  (r < 1): radial lines fanning from the singularity (the now-timelike
                        r-direction) + vertical lines (the spacelike t-direction).
       SIZE is chosen so BHX stays just outside the clip box even at r = 0.4. */
    function drawAliceGrid(ax, ay, r) {
        var SIZE   = 35;                     // px half-extent of clip box
        var STEP   = 11;                     // px between lines
        var N      = 3;                      // lines each side of centre
        var inside = r < 1;

        ctx.save();
        ctx.beginPath();
        ctx.rect(ax - SIZE, ay - SIZE, SIZE * 2, SIZE * 2);
        ctx.clip();

        ctx.strokeStyle = 'rgba(255,255,255,0.42)';
        ctx.lineWidth   = 0.8;
        ctx.setLineDash([3, 3]);

        if (!inside) {
            /* Flat Cartesian — horizontal and vertical lines */
            for (var i = -N; i <= N; i++) {
                ctx.beginPath();
                ctx.moveTo(ax - SIZE, ay + i * STEP);
                ctx.lineTo(ax + SIZE, ay + i * STEP);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(ax + i * STEP, ay - SIZE);
                ctx.lineTo(ax + i * STEP, ay + SIZE);
                ctx.stroke();
            }
        } else {
            /* Inside horizon — radial x-lines converging toward singularity
               + vertical y-lines (spacelike t-direction) */
            var dist   = Math.max(ax - BHX, 1);   // px from singularity
            var dAngle = STEP / dist;              // angular step (rad) for even spacing at Alice
            var reach  = dist + SIZE + 10;         // extend past clip box

            for (var i = -N; i <= N; i++) {
                var angle = i * dAngle;
                var ca = Math.cos(angle), sa = Math.sin(angle);
                /* Extend the radial line in both directions so the clip box
                   always shows it crossing Alice's position */
                ctx.beginPath();
                ctx.moveTo(BHX + ca * (dist - SIZE - 10),
                           BHY + sa * (dist - SIZE - 10));
                ctx.lineTo(BHX + ca * reach,
                           BHY + sa * reach);
                ctx.stroke();

                /* Vertical (t = const, spacelike) */
                ctx.beginPath();
                ctx.moveTo(ax + i * STEP, ay - SIZE);
                ctx.lineTo(ax + i * STEP, ay + SIZE);
                ctx.stroke();
            }
        }

        ctx.setLineDash([]);
        ctx.restore();
    }

    /* Dispatcher — called after each slide draw */
    function drawGrid() {
        if (gridMode === 'radial') drawRadialGrid();
        else if (gridMode === 'square') drawSquareGrid();
    }

    /*  Highway perspective road — vanishing point at (BHX, BHY).
        The road fills the lower half of the canvas; the axis (y = BHY) is
        the horizon line.  Toggled by #alice-road-toggle. */
    function drawRoad() {
        if (!roadOn) return;

        var f      = H - BHY;  // focal length: VP to canvas bottom
        var spread = H;         // road half-width at canvas bottom

        // /* Road surface */
        // ctx.beginPath();
        // ctx.moveTo(BHX, BHY);
        // ctx.lineTo(BHX - spread, H);
        // ctx.lineTo(BHX + spread, H);
        // ctx.closePath();
        // ctx.fillStyle = 'rgba(14,14,32,0.80)';
        // ctx.fill();

        /* Road edges (solid yellow lines converging to VP) */
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = 'rgba(255,215,70,0.62)';
        ctx.beginPath(); ctx.moveTo(BHX, BHY); ctx.lineTo(BHX - spread, H); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(BHX, BHY); ctx.lineTo(BHX + spread, H); ctx.stroke();

        /* Perspective-correct dashes.
           At integer depth k:  y(k) = BHY + f/k.
           Each dash spans from y(k) down to y(k + 0.55), leaving a gap. */
        for (var ki = 1; ki <= 12; ki++) {
            var yn = BHY + f / ki;           // near (viewer-side) edge of dash
            var yf = BHY + f / (ki + 0.55);  // far edge of dash
            if (yn > H) yn = H;
            if (yf <= BHY) break;

            var fn = (yn - BHY) / f;          // fractional depth at near edge
            var ff = (yf - BHY) / f;          // fractional depth at far edge
            var hwn = spread * fn;             // road half-width at near edge
            var hwf = spread * ff;             // road half-width at far edge

            /* Centre line (dashed yellow) */
            var cwn = Math.max(0.2, hwn * 0.012);
            var cwf = Math.max(0.1, hwf * 0.012);
            ctx.fillStyle = 'rgba(255,240,120,0.82)';
            ctx.beginPath();
            ctx.moveTo(BHX - cwf, yf); ctx.lineTo(BHX + cwf, yf);
            ctx.lineTo(BHX + cwn, yn); ctx.lineTo(BHX - cwn, yn);
            ctx.closePath(); ctx.fill();

            /* Lane dividers (dashed white) at ±42 % of road half-width */
            var lf = 0.42;
            var lwn = Math.max(0.2, hwn * 0.012);
            var lwf = Math.max(0.1, hwf * 0.012);
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
       Slide definitions
       ================================================================ */
    var slides = [
        /* ---- Slide 1: Before the Fall ---- */
        {
            caption: '<strong>Fig.\u00a01 \u2014 Before the Fall</strong>: Alice and Bob are together at <em>r</em>\u00a0\u226b\u00a01, far outside the event horizon. '
                + 'Their station hovers with thrusters so Bob\'s clock tracks comoving time. '
                + 'Both measure locally flat spacetime. Alice is about to release the G\u2011Odyssic into free fall.',
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                var ax = BOB_X - 24, ay = BHY;
                var bx = BOB_X, by = BHY - 22;
                drawDot(ax, ay, 'Alice', '#ef5350');
                drawDot(bx, by, 'Bob', '#4fc3f7');
                ctx.font = '10px monospace';
                ctx.fillStyle = 'rgba(255,255,255,0.38)';
                ctx.textAlign = 'center';
                ctx.fillText('r \u2192 \u221e', (ax + bx) / 2, ay + 38);
                ctx.beginPath();
                ctx.arc((ax + bx) / 2, (ay + by) / 2, 36, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255,255,255,0.06)';
                ctx.lineWidth = 1;
                ctx.stroke();
                arrowLeft(ax - 12, ax - 55, ay, 'rgba(239,83,80,0.6)');
                drawTitle('Before the Fall  (r \u2192 \u221e)');
            }
        },

        /* ---- Slide 2: Mid-Descent ---- */
        {
            caption: '<strong>Fig.\u00a02 \u2014 Mid-Descent</strong>: Alice is at <em>r</em>\u00a0&gt;\u00a01, accelerating toward the horizon. '
                + 'Bob watches from his station; each pulse Alice sends back arrives more redshifted than the last. '
                + 'In Alice\'s local frame everything feels normal.',
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                drawPath(5.9, 2.3);
                var a = drawAlice(2.3, 'r \u2248 2.3');
                drawBobStd();
                drawTitle('Mid-Descent  (r > 1)');
            }
        },

        /* ---- Slide 3: At the Horizon ---- */
        {
            caption: '<strong>Fig.\u00a03 \u2014 At the Horizon</strong>: Alice is at <em>r</em>\u00a0=\u00a01 exactly. '
                + 'For Bob, her signals have redshifted to zero \u2014 she appears frozen. '
                + 'For Alice, horizon crossing is locally unremarkable: the Equivalence Principle guarantees flat local spacetime.',
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                drawPath(5.9, 1.0);
                var a = drawAlice(1.0, 'r = 1');
                drawBobStd();
                ctx.beginPath();
                ctx.moveTo(BOB_X, BOB_Y);
                ctx.lineTo(a.x, a.y);
                ctx.strokeStyle = 'rgba(79,195,247,0.07)';
                ctx.lineWidth = 1;
                ctx.setLineDash([3, 5]);
                ctx.stroke();
                ctx.setLineDash([]);
                drawTitle('At the Horizon  (r = 1)');
            }
        },

        /* ---- Slide 4: Inside the Horizon ---- */
        {
            caption: '<strong>Fig.\u00a04 \u2014 Inside the Horizon</strong>: Alice is at <em>r</em>\u00a0&lt;\u00a01. '
                + 'No signal from Bob can follow her. Below the horizon the Schwarzschild metric flips: '
                + '<em>r</em> becomes timelike and <em>t</em> becomes spacelike. '
                + 'Alice\'s local lab remains perfectly Minkowskian.',
            draw: function () {
                drawBg(); drawStars(); drawAxis(); drawBH();
                drawPath(5.9, 0.5);
                drawAlice(0.5, 'r \u2248 0.5');
                drawBobStd();
                ctx.font = 'italic 9px sans-serif';
                ctx.fillStyle = 'rgba(255,220,100,0.52)';
                ctx.textAlign = 'center';
                ctx.fillText('r \u2194 t  (roles exchanged below horizon)', BHX, BHY + 44);
                drawTitle('Inside the Horizon  (r < 1)');
            }
        },

        /* ---- Slide 5: Vacuum Singularity ---- */
        {
            caption: '<strong>Fig.\u00a05 \u2014 Vacuum Singularity</strong>: In pure-vacuum Schwarzschild, Alice reaches '
                + '<em>r</em>\u00a0=\u00a00 at finite proper time <em>\u03c4</em>\u00a0=\u00a02/3. '
                + 'The curvature diverges. This is the classical endpoint the GD programme replaces.',
            draw: function () {
                drawBg(); drawAxis(); drawBH();
                /* concentric dashed rings (red tint — doom) */
                [0.25, 0.5, 1.0, 2.0, 3.5].forEach(function (r) {
                    ctx.beginPath();
                    ctx.arc(BHX, BHY, rPx(r), 0, Math.PI * 2);
                    ctx.strokeStyle = r <= 1 ? 'rgba(255,100,80,0.22)' : 'rgba(255,100,80,0.10)';
                    ctx.lineWidth = 0.8;
                    ctx.setLineDash([4, 7]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    if (r === 1.0) {
                        ctx.font = '9px monospace';
                        ctx.fillStyle = 'rgba(255,130,80,0.50)';
                        ctx.textAlign = 'left';
                        ctx.fillText('r\u202f=\u202f1', BHX + rPx(1) + 5, BHY - 10);
                    }
                });
                /* dark BH interior */
                ctx.beginPath();
                ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(3,3,16,0.82)';
                ctx.fill();
                drawStars();
                /* singularity flash — sharp red (finite-time endpoint) */
                ctx.shadowBlur = 30;
                ctx.shadowColor = '#ff3333';
                ctx.beginPath();
                ctx.arc(BHX, BHY, 6, 0, Math.PI * 2);
                ctx.fillStyle = '#ff4444';
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(255,110,110,0.88)';
                ctx.font = 'bold 10px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('r\u202f=\u202f0', BHX, BHY + 18);
                ctx.fillStyle = 'rgba(255,160,160,0.65)';
                ctx.font = '10px monospace';
                ctx.fillText('\u03c4\u202f=\u202f2/3', BHX, BHY + 31);
                /* Alice at r = 0.4 with arrow reaching to the singularity */
                var a5 = drawAlice(0.4, null);
                arrowLeft(a5.x - 12, BHX + 10, a5.y, 'rgba(239,83,80,0.72)');
                /* Bob exterior */
                drawBobStd();

                drawTitle('Vacuum Schwarzschild \u2014 Singularity at r\u00a0=\u00a00');
            }
        },

        /* ---- Slide 6: The Vanishing Point ---- */
        {
            caption: '<strong>Fig.\u00a06 \u2014 The Vanishing Point</strong>: With the PG interior (dust\u00a0+\u00a0\u039b), '
                + 'the infall function near <em>r</em>\u00a0=\u00a00 goes as <em>F</em>(<em>r</em>)\u00a0~\u00a0<em>r</em>\u221a\u039b, '
                + 'and the proper time to the centre diverges: <em>\u03c4</em>\u00a0\u2192\u00a0\u221e. '
                + 'The singularity is a <em>vanishing point</em> \u2014 like the end of an infinite road, approached forever but never reached.',
            draw: function () {
                drawBg(); drawStars(); drawBH();
                /* concentric dashed rings */
                [0.25, 0.5, 1.0, 2.0, 3.5].forEach(function (r) {
                    ctx.beginPath();
                    ctx.arc(BHX, BHY, rPx(r), 0, Math.PI * 2);
                    ctx.strokeStyle = r <= 1 ? 'rgba(255,220,80,0.18)' : 'rgba(255,220,80,0.09)';
                    ctx.lineWidth = 0.8;
                    ctx.setLineDash([4, 7]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    if (r === 1.0) {
                        ctx.font = '9px monospace';
                        ctx.fillStyle = 'rgba(255,220,80,0.48)';
                        ctx.textAlign = 'left';
                        ctx.fillText('r\u202f=\u202f1', BHX + rPx(1) + 5, BHY - 10);
                    }
                });
                /* dark BH interior */
                ctx.beginPath();
                ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(3,3,16,0.82)';
                ctx.fill();
                /* singularity — red, matching slide 5 (Alice approaches but never arrives) */
                ctx.shadowBlur = 30;
                ctx.shadowColor = '#ff3333';
                ctx.beginPath();
                ctx.arc(BHX, BHY, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#ff4444';
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(255,110,110,0.88)';
                ctx.font = 'bold 10px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('r\u202f=\u202f0', BHX, BHY + 18);
                ctx.fillStyle = 'rgba(255,160,160,0.65)';
                ctx.font = '10px monospace';
                ctx.fillText('\u03c4 \u2192 \u221e', BHX, BHY + 31);
                /* Alice inside, on the r-axis, heading left */
                var a6 = drawAlice(0.4, null);
                arrowLeft(a6.x - 12, a6.x - 40, a6.y, 'rgba(239,83,80,0.55)');
                /* Bob exterior */
                drawBobStd();

                drawAxis();
                drawRoad();   /* highway perspective on top (toggled) */
                drawTitle('The Vanishing Point  (PG Interior: \u03c4 \u2192 \u221e)');
            }
        }
    ]; /* end slides */

    /* ================================================================
       Controller
       ================================================================ */
    var current = 0;

    function render() {
        ctx.clearRect(0, 0, W, H);
        slides[current].draw();
        drawGrid();
        caption.innerHTML = slides[current].caption;
        counter.textContent = (current + 1) + ' / ' + slides.length;
        btnPrev.disabled = current === 0;
        btnNext.disabled = current === slides.length - 1;

        /* Road button: only visible on the last slide */
        var roadBtn = document.getElementById('alice-road-btn');
        if (roadBtn) {
            roadBtn.style.display = current === slides.length - 1 ? '' : 'none';
        }
    }

    btnPrev.addEventListener('click', function () {
        if (current > 0) { current--; render(); }
    });
    btnNext.addEventListener('click', function () {
        if (current < slides.length - 1) { current++; render(); }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' && current < slides.length - 1) { current++; render(); }
        if (e.key === 'ArrowLeft' && current > 0) { current--; render(); }
    });

    var frameBtn = document.getElementById('alice-frame-btn');
    if (frameBtn) frameBtn.addEventListener('click', function () {
        localFrameOn = !localFrameOn;
        frameBtn.textContent = localFrameOn ? 'Hide Frame' : 'Local Frame';
        render();
    });

    var starsBtn = document.getElementById('alice-stars-btn');
    if (starsBtn) starsBtn.addEventListener('click', function () {
        starsOn = !starsOn;
        starsBtn.textContent = starsOn ? 'Hide Stars' : 'Show Stars';
        render();
    });

    var gridBtn = document.getElementById('alice-grid-btn');
    if (gridBtn) {
        var GRID_LABELS = { 'off': 'Grid Off', 'radial': 'Radial Grid', 'square': 'Square Grid' };
        var GRID_CYCLE  = ['off', 'radial', 'square'];
        gridBtn.addEventListener('click', function () {
            gridMode = GRID_CYCLE[(GRID_CYCLE.indexOf(gridMode) + 1) % GRID_CYCLE.length];
            gridBtn.textContent = GRID_LABELS[gridMode];
            render();
        });
    }

    var roadBtn = document.getElementById('alice-road-btn');
    if (roadBtn) roadBtn.addEventListener('click', function () {
        roadOn = !roadOn;
        roadBtn.textContent = roadOn ? 'Hide Road' : 'Show Road';
        render();
    });

    render();

    /* Public API — render a specific slide to an off-screen canvas and return its data URL.
       State (current slide, toggles) is saved and restored so the main canvas is unaffected. */
    function captureSlide(n) {
        var tmp = document.createElement('canvas');
        tmp.width  = W;
        tmp.height = H;
        var savedCtx   = ctx;
        var savedStars = starsOn;
        var savedRoad  = roadOn;
        var savedGrid  = gridMode;
        var savedFrame = localFrameOn;

        ctx          = tmp.getContext('2d');
        starsOn      = true;
        roadOn       = true;
        gridMode     = 'off';
        localFrameOn = false;

        slides[n].draw();
        var url = tmp.toDataURL('image/png');

        ctx          = savedCtx;
        starsOn      = savedStars;
        roadOn       = savedRoad;
        gridMode     = savedGrid;
        localFrameOn = savedFrame;

        return url;
    }

    window.alicesDescent = { captureSlide: captureSlide };
    document.dispatchEvent(new CustomEvent('alicesDescent:ready'));
}());
