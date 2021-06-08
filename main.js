'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } 
  else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  else {
    scrollIntoViews(link);
  }
});

// Handle click on 'Contact Me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoViews('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
var scrollValueY = 0;
var homeOpacity = 0;


document.addEventListener('scroll', () => {
  scrollValueY = window.scrollY;

  if (scrollValueY >= homeHeight) {
    scrollValueY = homeHeight;
    homeOpacity = 0;
  }
  else {
    homeOpacity = 1 - (scrollValueY / homeHeight);
  }
  
  console.log(homeOpacity);
  home.style.opacity = homeOpacity;
});


function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}
