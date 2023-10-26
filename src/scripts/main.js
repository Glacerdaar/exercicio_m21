document.addEventListener('DOMContentLoaded', function(){
    const question = document.querySelectorAll('[data-faq-question]');


    for (let i = 0; i < question.length; i++)
    question[i].addEventListener('click', abreOuFechaResposta);
});

function abreOuFechaResposta(el){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = el.target.parentNode;

    elementoPai.classList.toggle(classe);
}