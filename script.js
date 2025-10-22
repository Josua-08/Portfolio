// Fade-in Animation für Projektkarten
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Parallax-Effekt für Hero Text
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelector('.hero h1').style.transform = `translateY(${scrollY * 0.3}px)`;
  document.querySelector('.hero p').style.transform = `translateY(${scrollY * 0.2}px)`;
});
