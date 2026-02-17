const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('header-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.classList.toggle('open');
});

// Efecto de cambio al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});