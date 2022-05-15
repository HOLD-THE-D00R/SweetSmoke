const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", (e) => {
  menuButton.classList.toggle("menu-btn--active");
  menu.classList.toggle("menu--active");
});

menu.addEventListener("click", (e) => {
  menuButton.classList.toggle("menu-btn--active");
  menu.classList.toggle("menu--active");
});


