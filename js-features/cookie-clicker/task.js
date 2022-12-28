'use strict';
// Объявляем переменные
const clickerCounter = document.querySelector("#clicker__counter");
const clickerCookie = document.querySelector(".clicker__cookie");
const speedClicker = document.querySelector("#clicker_speed");
let date;
// Функция для подсчета количества кликов
function countClicker(){
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    if(date === undefined){
        date = new Date();
    };
    if(+clickerCounter.textContent % 2 === 1){
        clickerCookie.style.width = '300px';
    } else{
        clickerCookie.style.width = '200px';
    };
    calculateSpeedClicker();
    return clickerCounter.textContent, date;
};
// Функция для определения скорости кликов в секунду
function calculateSpeedClicker(){
    let nowDate = new Date();
    let differentDateSeconds = (nowDate - date) / 1000;
    if(+clickerCounter.textContent === 1){
        speedClicker.textContent = 0.00;
        return speedClicker.textContent;
    } else{
        speedClicker.textContent = Math.floor((clickerCounter.textContent / differentDateSeconds) * 100) / 100;
    }; 
    return speedClicker.textContent;
};
clickerCookie.addEventListener('click', countClicker);