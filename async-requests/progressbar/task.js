'use strict';
const xhr = new XMLHttpRequest();
const progress = document.querySelector('#progress');
const btn = document.querySelector('#send');
btn.addEventListener('click', function() {
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send();
    xhr.upload.addEventListener('progress', function(event){
        console.log(event.total );
        console.log(event.loaded);
        progress.value = event.loaded;
    });
});