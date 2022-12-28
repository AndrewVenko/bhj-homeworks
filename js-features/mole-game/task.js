'use strict';
// Объявляем переменные
const deadMoles = document.querySelector('#dead');
const lostMoles = document.querySelector('#lost');
const hole1 = document.querySelector('#hole1');
const hole2 = document.querySelector('#hole2');
const hole3 = document.querySelector('#hole3');
const hole4 = document.querySelector('#hole4');
const hole5 = document.querySelector('#hole5');
const hole6 = document.querySelector('#hole6');
const hole7 = document.querySelector('#hole7');
const hole8 = document.querySelector('#hole8');
const hole9 = document.querySelector('#hole9');
function searchMoles(name){
    let holeClass = name.classList.contains("hole_has-mole");
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
hole1.addEventListener("click", function(){searchMoles(hole1)});
hole2.addEventListener("click", function(){searchMoles(hole2)});
hole3.addEventListener("click", function(){searchMoles(hole3)});
hole4.addEventListener("click", function(){searchMoles(hole4)});
hole5.addEventListener("click", function(){searchMoles(hole5)});
hole6.addEventListener("click", function(){searchMoles(hole6)});
hole7.addEventListener("click", function(){searchMoles(hole7)});
hole8.addEventListener("click", function(){searchMoles(hole8)});
hole9.addEventListener("click", function(){searchMoles(hole9)});