const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image .image img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__top", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__card", {
  ...scrollRevealOption,
  delay: 2500,
  interval: 500,
});
ScrollReveal().reveal(".header__image__footer", {
  ...scrollRevealOption,
  delay: 4000,
});

ScrollReveal().reveal(".menu__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".menu__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".banner__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".customer__image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
