// переменные
const menuLinks = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu_sub');
const arrayLinks = Array.from(menuLinks);
const arraySub = Array.from(menuSub);
// функция открытия меню
function openLink(position){
    let parent = arrayLinks[position+1].closest(".menu_sub");
    console.log(parent);
    if(parent){
        parent.classList.add("menu_active");
    };
};
// задание обработчика событий
for(let position in arrayLinks){
    arrayLinks[position].addEventListener("click", function(){openLink(position)}), false;
};