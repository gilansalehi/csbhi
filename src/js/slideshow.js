(function () {
  'use strict';

  /**
   * createAlicesDescent(cfg) — factory, call once per canvas.
   *
   * cfg:
   *   canvas      {string|Element}  canvas id (no #) or the element itself
   *   responsive  {boolean}         full-screen resize mode; default false = fixed 1050×440
   *   controls    {boolean}         wire up prev/next, toggles, captions; default false
   *   crossfade   {boolean}         animated crossfade between slides; default false
   *   namespace   {string}          window key for the public API, e.g. 'alicesDescent'
   *                                 fires a `<namespace>:ready` CustomEvent after init
   */
  function createAlicesDescent(cfg) {
    cfg = cfg || {};

    var canvas = typeof cfg.canvas === 'string'
      ? document.getElementById(cfg.canvas)
      : cfg.canvas;
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext('2d');

    /* ================================================================
       Layout — recomputed at init and on every resize (responsive only)
       ================================================================ */
    var W, H, BHX, BHY, RH, EXT, BOB_X, BOB_Y, sc;
    var FIXED_GU = 105;   // px per r-unit in fixed mode

    function computeLayout() {
      if (cfg.responsive) {
        W   = canvas.width  = window.innerWidth;
        H   = canvas.height = window.innerHeight;
        RH  = Math.round(H * 0.239);
        EXT = Math.round(W * 0.0995);
        sc  = H / 440;
        BHX = Math.round(W / 3);
      } else {
        W   = canvas.width  = 1050;
        H   = canvas.height = 440;
        RH  = FIXED_GU;
        EXT = FIXED_GU;
        sc  = 1;
        BHX = 3 * FIXED_GU;   // 315 px
      }
      BHY   = Math.round(H / 2);
      BOB_X = BHX + rPx(6);
      BOB_Y = BHY;
    }

    /* Two-zone coordinate mapping.
       r ≤ 1: interior scale — r=1 lands at RH px from BHX.
       r > 1: exterior scale (may differ in responsive mode to avoid crowding).
       In fixed mode RH == EXT == 105, so it degenerates to the simple linear map. */
    function rPx(r) {
      if (r <= 0) return 0;
      if (r <= 1) return r * RH;
      return RH + (r - 1) * EXT;
    }

    function fs(n) { return Math.round(n * sc) + 'px'; }

    /* ================================================================
       Stars — stored as relative [0,1] coords so resize is free
       ================================================================ */
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
       Toggle state
       ================================================================ */
    var starsOn      = true;
    var roadOn       = true;
    var gridMode     = 'off';   // 'off' | 'radial' | 'square'
    var localFrameOn = false;

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
      var tk  = 7 * sc;

      /* dashed segment: horizon → r = 5 */
      ctx.beginPath();
      ctx.moveTo(BHX + RH + 2 * sc, BHY);
      ctx.lineTo(x5, BHY);
      ctx.strokeStyle = 'rgba(255,255,255,0.13)';
      ctx.lineWidth = sc;
      ctx.setLineDash([6 * sc, 5 * sc]);
      ctx.stroke();
      ctx.setLineDash([]);

      /* scale-break squiggle: r = 5 → Bob (represents r → ∞) */
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
      if (localFrameOn) drawAliceGrid(ax, ay, r);
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

    function drawRoad() {
      if (!roadOn) return;
      var f      = H - BHY;
      var spread = H;

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
       Grid helpers — only meaningful when controls are enabled
       ================================================================ */

    function drawRadialGrid() {
      [1, 2, 3, 4, 5].forEach(function (r) {
        var isUnit = (r === 1);
        ctx.beginPath();
        ctx.arc(BHX, BHY, rPx(r), 0, Math.PI * 2);
        ctx.setLineDash(isUnit ? [4 * sc, 4 * sc] : [3 * sc, 6 * sc]);
        ctx.strokeStyle = isUnit ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.50)';
        ctx.lineWidth = isUnit ? 1.5 * sc : 0.9 * sc;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      for (var deg = 0; deg < 360; deg += 30) {
        var rad = deg * Math.PI / 180;
        var reach = Math.max(W, H) * 1.5;
        ctx.beginPath();
        ctx.moveTo(BHX, BHY);
        ctx.lineTo(BHX + Math.cos(rad) * reach, BHY + Math.sin(rad) * reach);
        ctx.setLineDash([2 * sc, 8 * sc]);
        ctx.strokeStyle = 'rgba(255,255,255,0.10)';
        ctx.lineWidth = 0.8 * sc;
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    function drawSquareGrid() {
      var step     = RH;
      var horizonX = BHX + RH;

      var xs = [];
      for (var x = horizonX; x <= W; x += step) xs.push(x);
      for (var x2 = horizonX - step; x2 >= 0; x2 -= step) xs.push(x2);

      var ys = [];
      for (var y = BHY; y <= H; y += step) ys.push(y);
      for (var y2 = BHY - step; y2 >= 0; y2 -= step) ys.push(y2);

      xs.forEach(function (x) {
        var isHorizon = (x === horizonX);
        ctx.beginPath();
        ctx.moveTo(x, 0); ctx.lineTo(x, H);
        ctx.setLineDash(isHorizon ? [4 * sc, 4 * sc] : [3 * sc, 6 * sc]);
        ctx.strokeStyle = isHorizon ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.50)';
        ctx.lineWidth = isHorizon ? 1.5 * sc : 0.9 * sc;
        ctx.stroke();
      });

      ys.forEach(function (y) {
        var isAxis = (y === BHY);
        ctx.beginPath();
        ctx.moveTo(0, y); ctx.lineTo(W, y);
        ctx.setLineDash(isAxis ? [4 * sc, 4 * sc] : [3 * sc, 6 * sc]);
        ctx.strokeStyle = isAxis ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.50)';
        ctx.lineWidth = isAxis ? 1.5 * sc : 0.9 * sc;
        ctx.stroke();
      });

      ctx.setLineDash([]);
    }

    /* Alice's local reference frame — mini-grid clipped around her position.
       Outside (r ≥ 1): flat Cartesian. Inside (r < 1): radial lines from singularity
       (timelike r-direction) + vertical spacelike t-lines. */
    function drawAliceGrid(ax, ay, r) {
      var SIZE   = 35 * sc;
      var STEP   = 11 * sc;
      var N      = 3;
      var inside = r < 1;

      ctx.save();
      ctx.beginPath();
      ctx.rect(ax - SIZE, ay - SIZE, SIZE * 2, SIZE * 2);
      ctx.clip();

      ctx.strokeStyle = 'rgba(255,255,255,0.42)';
      ctx.lineWidth   = 0.8 * sc;
      ctx.setLineDash([3 * sc, 3 * sc]);

      if (!inside) {
        for (var i = -N; i <= N; i++) {
          ctx.beginPath();
          ctx.moveTo(ax - SIZE, ay + i * STEP); ctx.lineTo(ax + SIZE, ay + i * STEP); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(ax + i * STEP, ay - SIZE); ctx.lineTo(ax + i * STEP, ay + SIZE); ctx.stroke();
        }
      } else {
        var dist   = Math.max(ax - BHX, 1);
        var dAngle = STEP / dist;
        var reach  = dist + SIZE + 10 * sc;

        for (var j = -N; j <= N; j++) {
          var angle = j * dAngle;
          var ca = Math.cos(angle), sa = Math.sin(angle);
          ctx.beginPath();
          ctx.moveTo(BHX + ca * (dist - SIZE - 10 * sc), BHY + sa * (dist - SIZE - 10 * sc));
          ctx.lineTo(BHX + ca * reach, BHY + sa * reach);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(ax + j * STEP, ay - SIZE); ctx.lineTo(ax + j * STEP, ay + SIZE); ctx.stroke();
        }
      }

      ctx.setLineDash([]);
      ctx.restore();
    }

    function drawGrid() {
      if (gridMode === 'radial')  drawRadialGrid();
      if (gridMode === 'square')  drawSquareGrid();
    }

    /* ================================================================
       Slides
       ================================================================ */
    var slides = [

      /* 0 — Before the Fall */
      {
        caption: '<strong>Fig.\u00a01 \u2014 Before the Fall</strong>: Alice and Bob are together at <em>r</em>\u00a0\u226b\u00a01, far outside the event horizon. '
          + 'Their station hovers with thrusters so Bob\'s clock tracks comoving time. '
          + 'Both measure locally flat spacetime. Alice is about to release the G\u2011Odyssic into free fall.',
        draw: function () {
          drawBg(); drawStars(); drawAxis(); drawBH();
          var ax = BOB_X - 24 * sc, ay = BHY;
          var bx = BOB_X,           by = BHY - 22 * sc;
          drawDot(ax, ay, 'Alice', '#ef5350');
          drawDot(bx, by, 'Bob',   '#4fc3f7');
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
        caption: '<strong>Fig.\u00a02 \u2014 Mid-Descent</strong>: Alice is at <em>r</em>\u00a0&gt;\u00a01, accelerating toward the horizon. '
          + 'Bob watches from his station; each pulse Alice sends back arrives more redshifted than the last. '
          + 'In Alice\'s local frame everything feels normal.',
        draw: function () {
          drawBg(); drawStars(); drawAxis(); drawBH();
          drawPath(5.9, 2.3);
          var a = drawAlice(2.3, 'r \u2248 2.3');
          drawBobStd();
          /* wavy line illustrates progressive redshift of Alice's signals */
          ctx.beginPath();
          for (var i = 0; i <= 36; i++) {
            var t  = i / 36;
            var sx = a.x + (BOB_X - a.x) * t;
            var sy = BHY + Math.sin(t * Math.PI * 11) * 6 * sc * t;
            if (i === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
          }
          ctx.strokeStyle = 'rgba(79,195,247,0.28)';
          ctx.lineWidth = sc;
          ctx.setLineDash([3 * sc, 4 * sc]);
          ctx.stroke();
          ctx.setLineDash([]);
          drawTitle('Mid-Descent  (r > 1)');
        }
      },

      /* 2 — At the Horizon */
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
          ctx.moveTo(BOB_X, BOB_Y); ctx.lineTo(a.x, a.y);
          ctx.strokeStyle = 'rgba(79,195,247,0.07)';
          ctx.lineWidth = sc;
          ctx.setLineDash([3 * sc, 5 * sc]);
          ctx.stroke();
          ctx.setLineDash([]);
          drawTitle('At the Horizon  (r = 1)');
        }
      },

      /* 3 — Inside the Horizon */
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
          ctx.font = 'italic ' + fs(9) + ' sans-serif';
          ctx.fillStyle = 'rgba(255,220,100,0.52)';
          ctx.textAlign = 'center';
          // ctx.fillText('r \u2194 t  (roles exchanged below horizon)', BHX, BHY + 44 * sc);
          drawTitle('Inside the Horizon  (r < 1)');
        }
      },

      /* 4 — Vacuum Singularity */
      {
        caption: '<strong>Fig.\u00a05 \u2014 Vacuum Singularity</strong>: In pure-vacuum Schwarzschild, Alice reaches '
          + '<em>r</em>\u00a0=\u00a00 at finite proper time <em>\u03c4</em>\u00a0=\u00a02/3. '
          + 'The curvature diverges. This is the classical endpoint the GD programme replaces.',
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
          });
          ctx.beginPath();
          ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(3,3,16,0.82)';
          ctx.fill();
          drawStars(); drawBH();
          ctx.shadowBlur = 30 * sc;
          ctx.shadowColor = '#ff3333';
          ctx.beginPath();
          ctx.arc(BHX, BHY, 6 * sc, 0, Math.PI * 2);
          ctx.fillStyle = '#ff4444';
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(255,110,110,0.88)';
          ctx.textAlign = 'center';
          ctx.fillStyle = 'rgba(255,160,160,0.65)';
          ctx.font = fs(10) + ' monospace';
          ctx.fillText('\u03c4\u202f=\u202f2/3', BHX, BHY + 31 * sc);
          var a4 = drawAlice(0.4, null);
          arrowLeft(a4.x - 12 * sc, BHX + 10 * sc, a4.y, 'rgba(239,83,80,0.72)');
          drawBobStd();
          drawAxis();
          drawTitle('Vacuum Schwarzschild \u2014 Singularity at r\u00a0=\u00a00');
        }
      },

      /* 5 — The Vanishing Point */
      {
        caption: '<strong>Fig.\u00a06 \u2014 The Vanishing Point</strong>: With the PG interior (dust\u00a0+\u00a0\u039b), '
          + 'the infall function near <em>r</em>\u00a0=\u00a00 goes as <em>F</em>(<em>r</em>)\u00a0~\u00a0<em>r</em>\u221a\u039b, '
          + 'and the proper time to the centre diverges: <em>\u03c4</em>\u00a0\u2192\u00a0\u221e. '
          + 'The singularity is a <em>vanishing point</em> \u2014 like the end of an infinite road, approached forever but never reached.',
        draw: function () {
          drawBg(); drawStars(); drawBH();
          [0.25, 0.5, 1.0, 2.0, 3.5].forEach(function (r) {
            ctx.beginPath();
            ctx.arc(BHX, BHY, rPx(r), 0, Math.PI * 2);
            ctx.strokeStyle = r <= 1 ? 'rgba(255,220,80,0.18)' : 'rgba(255,220,80,0.09)';
            ctx.lineWidth = 0.8 * sc;
            ctx.setLineDash([4 * sc, 7 * sc]);
            ctx.stroke();
            ctx.setLineDash([]);
          });
          ctx.beginPath();
          ctx.arc(BHX, BHY, RH, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(3,3,16,0.82)';
          ctx.fill();
          /* gold dot — the vanishing point is a perspective limit, not a crash */
          ctx.shadowBlur = 30 * sc;
          ctx.shadowColor = '#ffcc44';
          ctx.beginPath();
          ctx.arc(BHX, BHY, 5 * sc, 0, Math.PI * 2);
          ctx.fillStyle = '#ffdd55';
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(255,220,80,0.88)';
          ctx.font = 'bold ' + fs(10) + ' monospace';
          ctx.textAlign = 'center';
          ctx.fillText('r\u202f=\u202f0', BHX, BHY + 18 * sc);
          ctx.fillStyle = 'rgba(255,200,80,0.65)';
          ctx.font = fs(10) + ' monospace';
          ctx.fillText('\u03c4 \u2192 \u221e', BHX, BHY + 31 * sc);
          var a5 = drawAlice(0.4, null);
          arrowLeft(a5.x - 12 * sc, a5.x - 40 * sc, a5.y, 'rgba(239,83,80,0.55)');
          drawBobStd();
          drawAxis();
          drawRoad();
          drawTitle('The Vanishing Point  (PG Interior: \u03c4 \u2192 \u221e)');
        }
      }

    ]; /* end slides */

    /* ================================================================
       Controller
       ================================================================ */
    var current = 0;
    var animId  = null;
    var FADE_MS = 380;
    var offCvs  = cfg.crossfade ? document.createElement('canvas') : null;
    var offCtx2 = offCvs ? offCvs.getContext('2d') : null;

    /* Cached DOM refs — only populated when controls are enabled */
    var elCaption = cfg.controls ? document.getElementById('alice-caption')  : null;
    var elCounter = cfg.controls ? document.getElementById('alice-counter')  : null;
    var elBtnPrev = cfg.controls ? document.getElementById('alice-btn-prev') : null;
    var elBtnNext = cfg.controls ? document.getElementById('alice-btn-next') : null;
    var elRoadBtn = cfg.controls ? document.getElementById('alice-road-btn') : null;

    function render() {
      ctx.clearRect(0, 0, W, H);
      slides[current].draw();
      drawGrid();

      if (cfg.controls) {
        if (elCaption) elCaption.innerHTML  = slides[current].caption;
        if (elCounter) elCounter.textContent = (current + 1) + ' / ' + slides.length;
        if (elBtnPrev) elBtnPrev.disabled   = current === 0;
        if (elBtnNext) elBtnNext.disabled   = current === slides.length - 1;
        if (elRoadBtn) elRoadBtn.style.display = current === slides.length - 1 ? '' : 'none';
      }
    }

    function fadeTo(n) {
      if (n === current) return;
      if (cfg.crossfade && offCvs) {
        offCvs.width  = W;
        offCvs.height = H;
        offCtx2.drawImage(canvas, 0, 0);
      }
      current = n;
      if (animId) { cancelAnimationFrame(animId); animId = null; }
      if (!cfg.crossfade) { render(); return; }

      var startTs = null;
      function frame(ts) {
        if (!startTs) startTs = ts;
        var t = Math.min((ts - startTs) / FADE_MS, 1);
        ctx.clearRect(0, 0, W, H);
        slides[current].draw();
        drawGrid();
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

    function goTo(n) {
      fadeTo(Math.max(0, Math.min(n, slides.length - 1)));
    }

    /* ================================================================
       Controls wiring
       ================================================================ */
    if (cfg.controls) {
      if (elBtnPrev) elBtnPrev.addEventListener('click', function () { if (current > 0) goTo(current - 1); });
      if (elBtnNext) elBtnNext.addEventListener('click', function () { if (current < slides.length - 1) goTo(current + 1); });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' && current < slides.length - 1) goTo(current + 1);
        if (e.key === 'ArrowLeft'  && current > 0)                 goTo(current - 1);
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

      var GRID_LABELS = { 'off': 'Grid Off', 'radial': 'Radial Grid', 'square': 'Square Grid' };
      var GRID_CYCLE  = ['off', 'radial', 'square'];
      var gridBtn = document.getElementById('alice-grid-btn');
      if (gridBtn) gridBtn.addEventListener('click', function () {
        gridMode = GRID_CYCLE[(GRID_CYCLE.indexOf(gridMode) + 1) % GRID_CYCLE.length];
        gridBtn.textContent = GRID_LABELS[gridMode];
        render();
      });

      if (elRoadBtn) elRoadBtn.addEventListener('click', function () {
        roadOn = !roadOn;
        elRoadBtn.textContent = roadOn ? 'Hide Road' : 'Show Road';
        render();
      });
    }

    /* ================================================================
       Capture — renders a slide to an off-screen canvas and returns a data URL.
       Saves and restores all toggle state so the live canvas is unaffected.
       ================================================================ */
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

    /* ================================================================
       Resize + init
       ================================================================ */
    if (cfg.responsive) {
      window.addEventListener('resize', function () {
        if (animId) { cancelAnimationFrame(animId); animId = null; }
        computeLayout();
        render();
      });
    }

    computeLayout();
    render();

    /* ================================================================
       Public API
       ================================================================ */
    if (cfg.namespace) {
      window[cfg.namespace] = {
        slideCount:    slides.length,
        goToSlide:     goTo,
        captureSlide:  captureSlide
      };
      document.dispatchEvent(new CustomEvent(cfg.namespace + ':ready'));
    }
  }

  window.createAlicesDescent = createAlicesDescent;
}());
