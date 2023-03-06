'use strict';
// задание переменных
const xhr = new XMLHttpRequest();
const signin = document.querySelector('#signin');
const signinBtn = document.querySelector('#signin__btn');
const formSingin = document.forms.signin__form;
const welcome = document.querySelector('#welcome');
// задаем обработчик события для формы
formSingin.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(formSingin);
    console.log(formData);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.addEventListener('load', function(event){
        let stringAnswer = xhr.response.split(',')[0].split(':')[1];
        console.log(stringAnswer);
        let stringId = xhr.response.split(',')[1].split(':')[1];
        if(stringAnswer === 'true'){
          welcome.classList.add('welcome_active');
          welcome.textContent += stringId.substring(0, stringId.length-1);
          signin.classList.remove('signin_active');
        } else{
          alert('Ошибка авторизации!');
        };
    });
});