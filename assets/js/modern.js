/* Small UI enhancements: scroll progress, reveal-on-scroll, back-to-top, active nav */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // scroll progress bar
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  // back-to-top button
  var top = document.createElement('button');
  top.className = 'back-to-top';
  top.setAttribute('aria-label', 'Back to top');
  top.innerHTML = '&#8593;';
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  document.body.appendChild(top);

  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    top.classList.toggle('show', h.scrollTop > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // highlight current page in the menu
  var here = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.masthead__menu-item:not(.masthead__menu-item--lg) a').forEach(function (a) {
    var p = a.getAttribute('href').replace(/index\.html$/, '');
    if (p === here || (p.length > 1 && here.indexOf(p) === 0)) a.classList.add('is-current');
  });

  // reveal on scroll
  if (!reduce && 'IntersectionObserver' in window) {
    var items = document.querySelectorAll('.content-container > *, .page__content > h2, .page__content > p, .talk-container, .research-interest');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
