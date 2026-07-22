document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__menu');
  const nav = document.querySelector('.header__nav');
  
  hamburger.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('active');
    nav.classList.toggle('active');
  });
  
  document.querySelectorAll('.header__menu-link').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
      nav.classList.remove('active');
    });
  });
});