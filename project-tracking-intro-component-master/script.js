const toggleContainer = document.querySelector(".nav-toggle");
const closing = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

toggleContainer.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  closing.classList.toggle("show");
  nav.classList.toggle("show");
});
