const share = document.querySelector(".circle");
const box = document.querySelector(".box");
const arrow = document.querySelector(".circle svg path");
const avatar = document.querySelector(".avatar");
const text = document.querySelector(".right p");
let level = 0;

const myq = window.matchMedia("(max-width: 450px)");
console.log(myq.matches);



share.addEventListener("click", () => {
    box.classList.toggle('active');
    share.classList.toggle('activeCircle');
    if (level == 0) {
        arrow.style.fill = 'white';
        if(myq.matches) {
            avatar.style.display = 'none';
            
        }
        level++;
    }
    else {
        arrow.style.fill = '#6E8098';
        if(myq.matches) {
            avatar.style.display = 'flex';
            
        }
        level--;
    }

    
});