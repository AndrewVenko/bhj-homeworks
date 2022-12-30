const menuLinks = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu_sub');
const parent = menuLinks[4].closest('.menu_sub');
const arrayMenu = Array.from(menuLinks);
let arraySub = Array.from(menuSub);
function openMenu(){
    let href = menuLinks[1].getAttribute('href');
    if(href === ''){
         return arraySub[0].classList.add('menu_active');
    };
};
arrayMenu[1].addEventListener('click', openMenu)
console.log(arrayMenu);
console.log(parent);