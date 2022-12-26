'use strict';
let time = document.querySelector("#timer");
function startTimer(){
    if(+time.innerHTML === 0){
        clearInterval(intervalId);
        window.alert('Вы победили в конкурсе!');
    } else{
        time.innerHTML = time.innerHTML - 1;
        return time.innerHTML;
    };
};
let intervalId = setInterval(startTimer, 1000);