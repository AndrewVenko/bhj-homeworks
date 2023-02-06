'use strict';
// задание переменных
const productValue = document.querySelectorAll('.product__quantity-value');
const productDec = document.querySelectorAll('.product__quantity-control_dec');
const productInc = document.querySelectorAll('.product__quantity-control_inc');
const productBasket = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const arrayProductBasket = Array.from(productBasket);
const arrayProductValue = Array.from(productValue);
const arrayProductDec = Array.from(productDec);
const arrayProductInc = Array.from(productInc);
const cartProductsObject = {};
// задание обработчика событий
function calculateValue(element, number){
    let indexElementDec = arrayProductDec.findIndex(item => item === element);
    let indexElementInc = arrayProductInc.findIndex(item => item === element);
    if(indexElementDec !== -1){
        arrayProductValue[indexElementDec].textContent = +arrayProductValue[indexElementDec].textContent + number;
        if(+arrayProductValue[indexElementDec].textContent <= 0){
            arrayProductValue[indexElementDec].textContent = 1;
        };
    } else{
        arrayProductValue[indexElementInc].textContent = +arrayProductValue[indexElementInc].textContent + number;
    };
};
function addInBasket(element){
    const indexElement = arrayProductBasket.findIndex(item => item === element);
    const parentElement = element.closest('.product');
    const dataParentElement = parentElement.dataset.id;
    const imgs = parentElement.children[1].src;
    if(cartProductsObject[dataParentElement] !== undefined){
        cartProductsObject[dataParentElement].children[1].textContent = +cartProductsObject[dataParentElement].children[1].textContent + +arrayProductValue[indexElement].textContent;
    } else {
        cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${dataParentElement}">
           <img class="cart__product-image" src="${imgs}">
           <div class="cart__product-count">${arrayProductValue[indexElement].textContent}</div>
        </div> 
        `);
        cartProductsObject[dataParentElement] = cartProducts.lastElementChild;
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