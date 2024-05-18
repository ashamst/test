// navbar
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


// animation
var truck = document.querySelector('.truck img');
var clouds = document.querySelector('.clouds');
var headline = document.querySelector('.headline');
var header = document.querySelector('header');

var tl = gsap.timeline({ defaults: {duration: 2, ease: "power3.inOut"} } );

tl.set(truck, {
  yPercent: 100
}).set(clouds, {
  yPercent: 100
}).set(headline, {
  yPercent: 100
}).set(header, {
  yPercent: -100,
  opacity: 0,
});

tl.to(truck, {
  yPercent: 0,
  opacity: 1
}, "1").to(clouds, {
  yPercent: 0,
  opacity: 1
}, "1.2").to(headline, {
  yPercent: 0,
  opacity: 1,
  duration: 3,
}, "2.3").to(header, {
  yPercent: 0,
  opacity: 1,
  duration: 1, 
}, "1.5"); 



