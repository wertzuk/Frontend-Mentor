const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const modalClose = document.querySelector(".modal-close")
const nav = document.querySelector("nav");
const topSection = document.querySelector(".top-section");
const mainHeader = document.querySelector(".main-header");
const checkMarks = document.querySelectorAll(".checkmark");

const completed = document.querySelector(".completed");
const completedBtn = document.querySelector(".completed-btn");
const btn = document.querySelector(".big-btn");
const continueBtns = document.querySelectorAll(".continue-btn");
const modalSection = document.querySelector(".modal-section");

const items = [hamburger, closeIcon, nav, topSection];

hamburger.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    modalSection.classList.remove("active");
    mainHeader.classList.add("header-active");
})

closeIcon.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    mainHeader.classList.remove("header-active");
})

checkMarks.forEach(checkMark => {
    const circle = checkMark.children[0];
    const container = checkMark.parentElement.parentElement;
    checkMark.addEventListener('click', () => {
        circle.classList.toggle("active");
        container.classList.toggle("offer-active");
        container.lastElementChild.classList.add("active");

    });
});

btn.addEventListener('click', () => {
    modalSection.classList.add("active");
    document.body.style.background = "rgba(219, 214, 214, 0.9)";
    
});

modalClose.addEventListener('click',() => {
    modalSection.classList.remove("active");
    document.body.style.background  = "rgba(219, 214, 214, 0.3)";
    
});

continueBtns.forEach(button => {
    button.addEventListener('click', () => {
        modalSection.classList.remove("active");
        completed.classList.add("active");
    });
})

completedBtn.addEventListener('click', () => {
    document.body.style.background  = "rgba(219, 214, 214, 0.3)";
    completed.classList.remove("active");
})

