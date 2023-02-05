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
    for(let element of linksArray){
        if(element.childElementCount === 1){
            element.firstElementChild.remove();
        };
    };
    const attributeTitle = element.getAttribute('title');
    element.insertAdjacentHTML('beforeend', `<div class="tooltip">${attributeTitle}</div>`);
    const div = document.querySelector('.tooltip');
    if(!div.classList.contains('tooltip_active')){
        div.classList.add('tooltip_active');
    };
};