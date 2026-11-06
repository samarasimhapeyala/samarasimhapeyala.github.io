/* Self-hosted interactive globe (no third-party service).
   Uses d3-geo + topojson-client + world-atlas, all served from /assets/globe/. */
(function () {
  var canvas = document.getElementById('site-globe');
  if (!canvas || !window.d3 || !window.topojson) return;

  var HOME = { name: 'Bangalore, India', lonlat: [77.5946, 12.9716] };
  var size = canvas.clientWidth || 220;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  var radius = size / 2 - 4;
  var projection = d3.geoOrthographic().scale(radius).translate([size / 2, size / 2]).clipAngle(90).rotate([-HOME.lonlat[0], -20]);
  var path = d3.geoPath(projection, ctx);
  var graticule = d3.geoGraticule10();
  var sphere = { type: 'Sphere' };

  var land = null;
  var dragging = false, last = null, auto = true, t0 = performance.now();
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function draw(now) {
    ctx.clearRect(0, 0, size, size);

    // ocean
    var g = ctx.createRadialGradient(size * 0.38, size * 0.35, radius * 0.1, size / 2, size / 2, radius);
    g.addColorStop(0, '#4aa3df');
    g.addColorStop(1, '#14507f');
    ctx.beginPath(); path(sphere); ctx.fillStyle = g; ctx.fill();

    // graticule
    ctx.beginPath(); path(graticule);
    ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 0.5; ctx.stroke();

    // land
    if (land) {
      ctx.beginPath(); path(land);
      ctx.fillStyle = '#e9efe2'; ctx.fill();
      ctx.strokeStyle = 'rgba(20,80,127,0.45)'; ctx.lineWidth = 0.4; ctx.stroke();
    }

    // home marker (pulsing), only when on the visible hemisphere
    var c = projection(HOME.lonlat);
    var r = projection.rotate();
    var visible = d3.geoDistance(HOME.lonlat, [-r[0], -r[1]]) < Math.PI / 2;
    if (c && visible) {
      var p = ((now - t0) % 1800) / 1800;
      ctx.beginPath(); ctx.arc(c[0], c[1], 3 + p * 10, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255,120,40,' + (1 - p) + ')'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(c[0], c[1], 3.2, 0, 2 * Math.PI);
      ctx.fillStyle = '#ff6a1a'; ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1; ctx.stroke();
    }
  }

  function tick(now) {
    if (auto && !dragging && !reduce) {
      var r = projection.rotate();
      projection.rotate([r[0] + 0.25, r[1], r[2]]);
    }
    draw(now);
    requestAnimationFrame(tick);
  }

  // drag to rotate
  function pos(ev) { var t = ev.touches ? ev.touches[0] : ev; var b = canvas.getBoundingClientRect(); return [t.clientX - b.left, t.clientY - b.top]; }
  function down(ev) { dragging = true; last = pos(ev); }
  function move(ev) {
    if (!dragging) return;
    var p = pos(ev), r = projection.rotate(), k = 0.4;
    projection.rotate([r[0] + (p[0] - last[0]) * k, Math.max(-60, Math.min(60, r[1] - (p[1] - last[1]) * k)), r[2]]);
    last = p;
    if (ev.cancelable) ev.preventDefault();
  }
  function up() { dragging = false; }
  canvas.addEventListener('mousedown', down);
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', up);
  canvas.addEventListener('touchstart', down, { passive: true });
  canvas.addEventListener('touchmove', move, { passive: false });
  canvas.addEventListener('touchend', up);

  fetch(canvas.getAttribute('data-src'))
    .then(function (r) { return r.json(); })
    .then(function (topo) { land = topojson.feature(topo, topo.objects.countries); })
    .catch(function () { /* ocean-only globe if data fails */ });

  requestAnimationFrame(tick);
})();
