const buttons = document.querySelectorAll(".input");
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener('click', () => {

    buttons.forEach(button => {
        const errorIcon = button.nextElementSibling;
        const errorMsg1 = errorIcon.nextElementSibling;
        const errorMsg2 = errorMsg1.nextElementSibling;

        if(!button.value) {
            button.classList.add('red-border');
            errorIcon.classList.remove('invisible');
            errorMsg2.classList.add('invisible');
            errorMsg1.classList.remove('invisible'); 
        }

        else if(button.type === "text" && !validateName(button.value)
        || button.type === "email" && !validateEmail(button.value)) {
            button.classList.add('red-border');
            errorIcon.classList.remove('invisible');
            errorMsg1.classList.add('invisible');
            errorMsg2.classList.remove('invisible'); 
        }
        
        else {
            button.classList.remove('red-border');
            errorIcon.classList.add('invisible');
            errorMsg1.classList.add('invisible');
            errorMsg2.classList.add('invisible');
        }
    });
});

function validateName (name) {
    const re = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    return re.test(String(name).toLowerCase());
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

