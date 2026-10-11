(function(){
  // Set footer year without requiring a framework.
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  // Honor the reduced-motion setting for in-page links.
  const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) document.documentElement.style.scrollBehavior='auto';
})();