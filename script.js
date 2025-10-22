// Fade-in Animation for elements with .fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Parallax effect for Hero text with requestAnimationFrame throttling
(() => {
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero p');
  let lastScroll = 0;
  let ticking = false;

  function update() {
    const y = lastScroll;
    if (heroTitle) heroTitle.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
    if (heroSubtitle) heroSubtitle.style.transform = `translate3d(0, ${y * 0.1}px, 0)`;
    ticking = false;
  }

  function onScroll() {
    lastScroll = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
