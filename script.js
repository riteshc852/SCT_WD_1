function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('resize', () => {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth >= 768) {
    navLinks.classList.remove('show');
  }
});
