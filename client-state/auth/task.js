'use strict';
// задание переменных
const xhr = new XMLHttpRequest();
const signin = document.querySelector('#signin');
const signinBtn = document.querySelector('#signin__btn');
const formSingin = document.querySelector('#signin__form');
const welcome = document.querySelector('.#welcome');
// задаем обработчик события для кнопки
signinBtn.addEventListener('click', function(event){
    event.preventDefault();
    const objectAnswer = {};
    const formData = new FormData(formSingin);
    console.log(formData);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.onload = () => {objectAnswer = xhr.response};
    console.log(objectAnswer.success);
    if(objectAnswer.success === true){
        welcome.classList.add(' welcome_active');
        signin.classList.remove('signin_active');
    } else{
        alert('Ошибка авторизации!');
    };
});