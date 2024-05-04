'use strict';

// el objeto dataTransfer transmite informacion entre dos partes


//# eventos drag 

const circulo = document.querySelector('.circulo');
const cuadrado = document.querySelector('.cuadrado')


circulo.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('clase',e.target.className)
});

circulo.addEventListener('drag',()=>console.log('arrastrando'));

circulo.addEventListener('dragend',()=>console.log('se ha soltado el elemento'));

cuadrado.addEventListener('dragenter',()=>console.log(1));


cuadrado.addEventListener('dragover',(e)=>{
    e.preventDefault();
    console.log(2);
});

cuadrado.addEventListener('drop',(e)=>{
    console.log(e.dataTransfer.getData('clase'))
});

cuadrado.addEventListener('dragleave',()=>console.log(4));