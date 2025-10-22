// Fade-in Animation für alle Elemente mit .fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Parallax-Effekt für Hero-Text
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero p');

  if (heroTitle) heroTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
  if (heroSubtitle) heroSubtitle.style.transform = `translateY(${scrollY * 0.2}px)`;
});
