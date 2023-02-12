'use strict';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', function(){
    if(xhr.readyState === xhr.DONE){
        console.log(xhr.responseText);
    };
});