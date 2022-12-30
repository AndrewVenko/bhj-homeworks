'use strict';
// задание переменных
const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const modalClose = document.querySelector('.modal__close');
const linkGood = document.querySelector('.show-success');
// открывать окно при загрузке страницы
modalMain.classList.add('modal_active');
// закрытие окна main
modalClose.addEventListener('click', function(){modalMain.classList.remove('modal_active')});
// открытие окна success
linkGood.addEventListener('click', function(){
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
});