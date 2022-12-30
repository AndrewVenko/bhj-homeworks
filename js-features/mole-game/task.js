'use strict';
// Объявляем переменные
const deadMoles = document.querySelector('#dead');
const lostMoles = document.querySelector('#lost');
const hole = document.querySelectorAll('.hole');
const arrayHole = Array.from(hole);
let numerId = 1;
function searchMoles(positionId){
    let holeId = document.querySelector(positionId);
    let holeClass = holeId.classList.contains("hole_has-mole");
    // счетчики
    if(holeClass){
        deadMoles.textContent = +deadMoles.textContent + 1;
    } else{
        lostMoles.textContent = +lostMoles.textContent + 1;
    };
    // условия победы
    if(+lostMoles.textContent === 5){
        deadMoles.textContent = 0;
        lostMoles.textContent = 0;
        window.alert('Поражение!');
    } else if(+deadMoles.textContent === 10){
        deadMoles.textContent = 0;
        lostMoles.textContent = 0;
        window.alert('Победа!');
    };
};
for(let position in arrayHole) {
    let positionId = '#' + 'hole'+ numerId;
    numerId = numerId + 1;
    arrayHole[position].addEventListener("click", function(){searchMoles(positionId)});
};