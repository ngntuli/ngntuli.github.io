"use strict";

const heroSection = document.querySelector(".hero__section");
const nav = document.querySelector(".header__nav");
const hamburgerBtn = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".header__link");

// Stick nav
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
heroObserver.observe(heroSection);

// Wave animation

const waveAnimate = function () {
  const wave = document.querySelector(".hero__wave svg");
  wave.classList.add("wave");
};

window.addEventListener("load", waveAnimate);

// Mobile Navigation

const openNav = function () {
  hamburgerBtn.classList.toggle("is-active");
  nav.classList.toggle("nav-open");
};

hamburgerBtn.addEventListener("click", openNav);
navLinks.forEach((link) => link.addEventListener("click", openNav));
