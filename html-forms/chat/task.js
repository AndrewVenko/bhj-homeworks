'use strict';
// задание переменных
const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const arrayMessagesRobor = [
    'Почему вы ничего не купили?',
    'У меня не так много свободного времени, что бы отвечать на ваши вопросы!',
    'Вы будете покупать хоть что-то?',
    'Оператор сейчас занят, так что я к вашим услугам.',
    'Кто пишет?',
    'До свидания! Не приходите больше к нам!',
];
// запустить чат
chat.addEventListener('dblclick', function(){
    chat.classList.add('chat-widget_active');
    messages.innerHTML = `
        <div class="message">
           <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
           <div class="message__text">
           Добрый день, мы ещё не проснулись. Позвоните через 10 лет
           </div>
        </div>
    `
});
input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        if(input.value !== ''){
            messages.innerHTML += `
        <div class="message message_client">
           <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
           <div class="message__text">${input.value}
           </div>
        </div>
        `
        input.value = '';
        let number = numberGenerator();
        while(number >= arrayMessagesRobor.length){
            number = numberGenerator();
        };
        messages.innerHTML += `
        <div class="message">
           <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
           <div class="message__text">${arrayMessagesRobor[number]}
           </div>
        </div>
        `
        };
    };
    if(messages.getBoundingClientRect().bottom > messages.clientHeight){
        messages.scrollBy(messages.clientWidth, window.innerHeight);
    };
});
function numberGenerator(){
    return Math.floor(Math.random() * 10);
};