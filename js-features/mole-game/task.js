'use strict';
// Объявляем переменные
let deadMoles = document.querySelector('#dead');
let lostMoles = document.querySelector('#lost');
let holes = document.querySelectorAll(".hole");
function searchMoles(){
    for(let i = 1; i < 9; i = i + 1){
        let name = '#' + 'hole' + i;
        let hole = document.querySelector(name);
        let holeClass = hole.classList.contains('hole_has-mole');
        if()
        console.log(holeClass);
    };
};
holes.addEventListener("click", searchMoles);