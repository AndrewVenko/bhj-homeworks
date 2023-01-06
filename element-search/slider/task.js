// задание переменных
const divImgs = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const arrayImg = Array.from(divImgs);
// функции перехода по стрелкам
function leafNext(){
    let indexActive;
    for(let element of arrayImg){
        if(element.classList.contains("slider__item_active")){
            indexActive = arrayImg.indexOf(element);
        };
    };
    arrayImg[indexActive].classList.remove('slider__item_active');
    if(indexActive < (arrayImg.length-1)){
        indexActive = indexActive + 1;
    } else{
        indexActive = 0;
    };
    return arrayImg[indexActive].classList.add('slider__item_active');
};
function leafPrev(){
    let indexActive = arrayImg.indexOf(element => element.classList.contains("slider__item_active"));
    for(let element of arrayImg){
        if(element.classList.contains("slider__item_active")){
            indexActive = arrayImg.indexOf(element);
        };
    };
    arrayImg[indexActive].classList.remove('slider__item_active');
    if(indexActive > 0){
        indexActive = indexActive - 1;
    } else{
        indexActive = (arrayImg.length-1);
    };
    return arrayImg[indexActive].classList.add('slider__item_active');
};
arrowNext.addEventListener('click', leafNext);
arrowPrev.addEventListener('click', leafPrev);