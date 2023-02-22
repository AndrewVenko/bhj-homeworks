'use strict';
// задание переменных 
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
// задание обработчика событий
if(document.cookie !== 'modal_active=on' || document.cookie !== 'modal_active=off'){
    document.cookie = 'modal_active=on';
    modal.classList.add('modal_active');
};
const lengthCookie = 'modal_active='.length;
const cookie = document.cookie.slice(lengthCookie, document.cookie.length);
if(cookie === 'off'){
    modal.classList.remove('modal_active');
};
console.log(cookie);
console.log(document.cookie);
modalClose.addEventListener('click', function(){
    modal.classList.remove('modal_active');
    document.cookie = 'modal_active=off';
})