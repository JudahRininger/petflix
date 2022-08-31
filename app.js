const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
    button.addEventListener('click', e => {
        answerDiv = e.target.parentElement.nextElementSibling;
        answerDiv.classList.toggle("closed");
        answerDiv.classList.toggle("open");

    });
});
// faqButtons.forEach(button => {
//     btn.addEventListener('click', e => {
//         symbolDiv = e.target.nextElementSibling
//         if(symbolDiv.textContent == '+') {
//             symbolDiv.textContent = 'x';
//         }
//         else {
//             symbolDiv.textContent = '+';
//         }
//     });
// });
