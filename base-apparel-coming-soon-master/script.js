const btn = document.querySelector('.btn');
const emailContainer = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon');
const message = document.querySelector('.error-message');

btn.addEventListener('click', () => {
    const input = emailContainer.value;
    if(!validateEmail(input)) {
        emailContainer.style.border = "solid 1.5px rgb(249, 100, 100)";
        errorIcon.classList.add("error");
        message.classList.add("error");
    }
    else {
        emailContainer.style.border = "solid .2px hsla(0, 6%, 24%, 0.3)";
        errorIcon.classList.remove("error");
        message.classList.remove("error");
    }
   
    
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
