// переменные
const menuLinks = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu_sub');
const arrayLinks = Array.from(menuLinks);
const arraySub = Array.from(menuSub);
// функция открытия меню
function openLink(element, event){
    if(arrayLinks[1] === element){
        if(arraySub[0].classList.contains('menu_active')){
            arraySub[0].classList.remove('menu_active');
        } else{
            arraySub[0].classList.add('menu_active');
        };
        event.preventDefault(); 
    } else if(arrayLinks[5] === element){
        if(arraySub[1].classList.contains('menu_active')){
            arraySub[1].classList.remove('menu_active');
        } else{
            arraySub[1].classList.add('menu_active');
        };
        event.preventDefault();
    };
};
// задание обработчика событий
for(let element of arrayLinks){
    element.addEventListener("click", function(){openLink(element, event)});
};
