'use strict';
// задание переменных
const productValue = document.querySelectorAll('.product__quantity-value');
const productDec = document.querySelectorAll('.product__quantity-control_dec');
const productInc = document.querySelectorAll('.product__quantity-control_inc');
const productBasket = document.querySelectorAll('.product__add');
const productImg = document.querySelectorAll('.product__image');
const cartProducts = document.querySelector('.cart__products');
const arrayProductBasket = Array.from(productBasket);
const arrayProductValue = Array.from(productValue);
const arrayProductDec = Array.from(productDec);
const arrayProductInc = Array.from(productInc);
const arrayProductImg = Array.from(productImg);
const arraysId = [];
// задание обработчика событий
function calculateValue(element, number){
    let indexElementDec = arrayProductDec.findIndex(item => item === element);
    let indexElementInc = arrayProductInc.findIndex(item => item === element);
    if(indexElementDec !== -1){
        arrayProductValue[indexElementDec].textContent = +arrayProductValue[indexElementDec].textContent + number;
        if(+arrayProductValue[indexElementDec].textContent < 0){
            arrayProductValue[indexElementDec].textContent = 0;
        };
    } else{
        arrayProductValue[indexElementInc].textContent = +arrayProductValue[indexElementInc].textContent + number;
    };
};
function addInBasket(element){
    let indexElement = arrayProductBasket.findIndex(item => item === element);
    let imgSrc = arrayProductImg[indexElement].src;
    let indexId = arraysId.findIndex((item, index) => index === indexElement);
    console.log(indexId);
    if(indexId !== -1){
        cartProducts.children[indexId].children[1].textContent = +cartProducts.children[indexId].children[1].textContent + +arrayProductValue[indexElement].textContent;
    } else if(arrayProductValue[indexElement].textContent > 0){
        cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${indexElement}">
           <img class="cart__product-image" src="${imgSrc}">
           <div class="cart__product-count">${arrayProductValue[indexElement].textContent}</div>
        </div> 
        `);
        arraysId.push(cartProducts.children[cartProducts.children.length-1].dataset.id);
        console.log(arraysId);
    };
};

for(let element of arrayProductDec){
    let number = -1;
    element.addEventListener('click', function(){calculateValue(element, number)});
};
for(let element of arrayProductInc){
    let number = 1;
    element.addEventListener('click', function(){calculateValue(element, number)});
};
for(let element of arrayProductBasket){
    element.addEventListener('click', function(){addInBasket(element)});
};