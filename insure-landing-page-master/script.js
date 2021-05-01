const menu = document.querySelector(".menu-container");
const navToggle = document.querySelector(".nav-toggle");
const hamburger = document.querySelector(".hamburger");
const closing = document.querySelector(".close");

navToggle.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  closing.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

const mq = window.matchMedia("(min-width: 600px");

mq.addEventListener("change", () => {
  if (mq.matches) {
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
    hamburger.classList.add("active");
    closing.classList.remove("active");
  }
});
