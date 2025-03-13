// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => preloader.style.display = 'none', 600);
});

// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Particles.js configuration
particlesJS('particles-js', {
  particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: ['#ff3366', '#ffcc33', '#ffffff'] },
      shape: { type: 'polygon', polygon: { nb_sides: 6 } },
      opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1 } },
      size: { value: 4, random: true, anim: { enable: true, speed: 2 } },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1.5 },
      move: { enable: true, speed: 4, direction: 'none', random: true, straight: false, out_mode: 'bounce' }
  },
  interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: true, mode: 'repulse' }, resize: true },
      modes: { bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 }, repulse: { distance: 100 } }
  },
  retina_detect: true
});

// Vanilla Tilt for 3D effects
VanillaTilt.init(document.querySelectorAll('.tilt'), {
  max: 20,
  speed: 600,
  glare: true,
  'max-glare': 0.5,
  perspective: 1000
});

// Section animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// EmailJS Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
  const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          alert('Message sent successfully to varunrawat5758@gmail.com!');
          this.reset();
      }, (error) => {
          alert('Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error);
      });
});
