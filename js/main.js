// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close menu on link click
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Counter animation on scroll
const counters = document.querySelectorAll('.counter-number');
let counted = false;

function animateCounters() {
  if (counted) return;
  const section = document.getElementById('impact');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    counted = true;
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      const duration = 2000;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else counter.textContent = target;
      }
      requestAnimationFrame(update);
    });
  }
}

window.addEventListener('scroll', animateCounters, { passive: true });
animateCounters();

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  else navbar.style.boxShadow = '0 1px 12px rgba(0,0,0,0.06)';
}, { passive: true });
