'use strict';
const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('#poll__title');
const pollAnswer = document.querySelector('#poll__answers');
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', function(){
    if(xhr.readyState === xhr.DONE){
        pollAnswer.innerHTML = '';
        const objectJSON = JSON.parse(xhr.responseText).data;
        const arrayAnswer = objectJSON.answers;
        pollTitle.textContent = objectJSON.title;
        arrayAnswer.forEach((element) => {
            pollAnswer.innerHTML += `
            <button class="poll__answer">
              ${element}
            </button>
            `
        });
        const arraysBtn = Array.from(pollAnswer.children);
        for(let element of arraysBtn){
            element.addEventListener('click', function(){
                alert('Спасибо, ваш голос засчитан!');
                xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhr.send();
            });
        };
    };
});