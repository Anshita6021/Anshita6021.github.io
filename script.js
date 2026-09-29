const nav = document.querySelector('.nav-wrap');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  nav.style.boxShadow = current > 8 ? '0 8px 30px rgba(0,0,0,.05)' : 'none';
  lastScroll = current;
});
