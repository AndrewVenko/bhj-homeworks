'use strict';
// Объявляем переменные
let deadMoles = document.querySelector('#dead');
let lostMoles = document.querySelector('#lost');
let hole1 = document.querySelector('#hole1');
let hole2 = document.querySelector('#hole2');
let hole3 = document.querySelector('#hole3');
let hole4 = document.querySelector('#hole4');
let hole5 = document.querySelector('#hole5');
let hole6 = document.querySelector('#hole6');
let hole7 = document.querySelector('#hole7');
let hole8 = document.querySelector('#hole8');
let hole9 = document.querySelector('#hole9');
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