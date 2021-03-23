const hamburgerContainer = document.querySelector(".hamburger-container");
const header = document.querySelector("header");
const ul = document.querySelector(".menu-ul");
const heading = document.querySelector(".main-heading");


hamburgerContainer.addEventListener('click', () => {
    hamburgerContainer.children[0].classList.toggle("show");
    hamburgerContainer.children[1].classList.toggle("show");
    header.classList.toggle("active");
    heading.classList.toggle("show");
    ul.classList.toggle("show");
});
