'use strict';
// задание переменных
const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const modalClose = document.querySelectorAll('.modal__close_times');
const linkGood = document.querySelector('.show-success');
const arrayClose = Array.from(modalClose);
console.log(arrayClose);
// открывать окно при загрузке страницы
modalMain.classList.add('modal_active');
// закрытие окна main
for(let element of arrayClose){
    element.addEventListener('click', function(){
        if(element.closest('#modal_main')){
            element.closest('#modal_main').remove('modal_active');
        } else{
            element.closest('#modal_success').remove('modal_active');
        };
    });
};
// открытие окна success
linkGood.addEventListener('click', function(){
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
});