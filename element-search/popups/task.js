'use strict';
// задание переменных
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal__close_times');
const linkGood = document.querySelector('.show-success');
const arrayClose = Array.from(modalClose);
// открывать окно при загрузке страницы
modals[0].classList.add('modal_active');
// закрытие окон
for(let element of arrayClose){
    element.addEventListener('click', function(){
        element.closest('.modal').remove('modal_active');
    });
};
// открытие окна success
linkGood.addEventListener('click', function(){
    modals[0].classList.remove('modal_active');
    modals[1].classList.add('modal_active');
});