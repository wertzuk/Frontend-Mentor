const rows = document.querySelectorAll(".question-row");
const answers = document.querySelectorAll(".answer");

for(let i=0; i<rows.length; i++) {
    const children = rows[i].children;
    const question = children[0];
    const arrow = children[1];
    const answer = children[2];
    rows[i].addEventListener('click', () => {
        question.classList.toggle('active');
        arrow.classList.toggle('up');
        answer.classList.toggle('invisible');     
        removeOtherActive(i);
    });
}

function removeOtherActive(idx) {
    for(let i=0; i<rows.length; i++) {
        if (i != idx) {
            const children = rows[i].children;
            children[0].classList.remove('active');
            children[1].classList.remove('up');
            children[2].classList.add('invisible');
           
        }
    }
}