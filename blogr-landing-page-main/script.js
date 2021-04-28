const icons = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const closing = document.querySelector(".close");
const menu = document.querySelector(".menu-container");
const connectItem = document.querySelector(".connect");
const nestedList = document.querySelector(".nested-list");

icons.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  closing.classList.toggle("active");
  menu.classList.toggle("active");
});

connectItem.addEventListener("click", () => {
  connectItem.classList.toggle("selected");
  nestedList.classList.toggle("active");
});
