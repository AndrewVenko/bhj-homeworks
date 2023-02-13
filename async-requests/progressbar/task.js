'use strict';
const xhr = new XMLHttpRequest();
const progress = document.querySelector('#progress');
const input = document.querySelector('#file');

input.addEventListener('click', function() {
    xhr.addEventListener('readystatechange', function(){
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        progress.value = xhr.readyState;
    });
});