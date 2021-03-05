const input = document.querySelector(".email");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".error-msg")

btn.addEventListener('click', () => {
    if(!validateEmail(input.value)) {
        input.style.border = "solid 1.5px rgb(156, 50, 50)";
        msg.classList.remove("invisible");
    }
    else {
        input.style.border = "solid 1.5px hsl(223, 100%, 88%)";
        msg.classList.add("invisible");
        input.value = "";
    }
});




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
