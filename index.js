var typed = new Typed('.text', {
  strings: ['Frontend Developer', 'Web Developer', 'Full Stack Developer'],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home, .services-box2, .main-text h2', {
  origin: 'top',
});
ScrollReveal().reveal('#portfolio, .contact-form, .services, .sub-title', {
  origin: 'bottom',
});
ScrollReveal().reveal('.services-box3, .about-text, #skills1', {
  origin: 'left',
});
ScrollReveal().reveal('.services-box1, .about-img, #skills2', {
  origin: 'right',
});
