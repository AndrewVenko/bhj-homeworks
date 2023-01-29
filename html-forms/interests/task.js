'use strict';
const inputIntetest = document.querySelectorAll('.interest__check');
const ul = document.querySelectorAll('.interests_active');
const arrayUl = Array.from(ul);
console.log(arrayUl);
const arrayInput = Array.from(inputIntetest);
for(let element of arrayInput){
    element.addEventListener('click', function(element){
        let index = arrayInput.indexOf(element.target);
        if(index === 0){
            if(element.target.matches('input[type="checkbox"]:checked')){
                let elem = element.target.closest(".interests_active");
                if(!elem){
                    inputIntetest[1].checked = true;
                    inputIntetest[2].checked = true;
                }
                console.log(elem);
            } else{
                inputIntetest[1].checked = false;
                inputIntetest[2].checked = false;
            }
        } else if(index === 3){
            if(element.target.matches('input[type="checkbox"]:checked')){
                let elem = element.target.closest(".interests_active");
                if(!elem){
                    inputIntetest[4].checked = true;
                    inputIntetest[5].checked = true;
                }
                console.log(elem);
            } else{
                inputIntetest[4].checked = false;
                inputIntetest[5].checked = false;
            };
        };
    });
};