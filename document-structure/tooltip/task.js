'use strict';
// задание переменных
const links = document.querySelectorAll('.has-tooltip');
const linksArray = Array.from(links);
// задание обработчика событий
for(let element of linksArray){
    element.addEventListener('click',function(){popupTooltip(element, event)});
}
function popupTooltip(element, event){
    event.preventDefault();
    for(let elem of linksArray){
        if((elem.childElementCount === 1) && (elem === element)){
            let divRemove =  element.firstElementChild;
            if((divRemove !== null) && divRemove.classList.contains('tooltip_active')){
                divRemove.classList.remove('tooltip_active');
                return;
            } else{
                divRemove.remove();
            };
        }else if((elem.childElementCount === 1) && (elem !== element)){
            elem.firstElementChild.remove();
        };
    };
    const attributeTitle = element.getAttribute('title');
    element.insertAdjacentHTML('beforeend', `<div class="tooltip">${attributeTitle}</div>`);
    const div = document.querySelector('.tooltip');
    div.classList.add('tooltip_active');
    const left = element.getBoundingClientRect().left + 10;
    const top = +element.getBoundingClientRect().top + 20;
    div.style.left = left + 'px';
    div.style.top = top + 'px';
};