'use strict';
// задание переменных
const input = document.querySelector('.tasks__input');
const btn = document.querySelector('.tasks__add');
const taskDiv = document.querySelector('.tasks__list');
// задание функции доюавление дел и обработчика
function addTask(event){
    event.preventDefault();
    let task = input.value;
    if(task.trim() === ''){
        return;
    };
    taskDiv.insertAdjacentHTML('beforeend', 
    `<div class="task">
       <div class="task__title">
         ${task}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
    let taskClose = taskDiv.lastElementChild.lastElementChild;
    taskClose.addEventListener('click', function(taskClose){
        taskClose.target.parentElement.remove();
    });
    input.value = '';
};
btn.addEventListener('click', function(event){addTask(event)});