// Año dinámico en footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Menú móvil (simple toggle)
const menuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav__list');
if (menuBtn && navList) {
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    if (navList.style.display === 'flex') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
      navList.style.flexDirection = 'column';
      navList.style.position = 'absolute';
      navList.style.top = '70px';
      navList.style.left = '0';
      navList.style.width = '100%';
      navList.style.backgroundColor = 'white';
      navList.style.padding = '1rem';
      navList.style.gap = '1rem';
    }
  });
}

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Cerrar menú móvil si está abierto
      if (navList && navList.style.display === 'flex') {
        navList.style.display = 'none';
      }
    }
  });
});