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
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
showSlide(currentSlide);
function handleScrollAnimation() {
  const slideshow = document.querySelector('.slideshow');
  const rect = slideshow.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    slideshow.classList.add('show-on-scroll');
    window.removeEventListener('scroll', handleScrollAnimation); // Only trigger once
  }
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();
const slideshow = document.querySelector('.slideshow');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      slideshow.classList.add('show');
    } else {
      slideshow.classList.remove('show');
    }
  });
}, {
  threshold: 0.3 
});

observer.observe(slideshow);


