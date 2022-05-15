// NAVBAR Animation

const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  header.classList.toggle("header--active", window.scrollY);
});

document.addEventListener("DOMContentLoaded", (e) => {
  header.classList.toggle("header--active", window.scrollY);
  
});









