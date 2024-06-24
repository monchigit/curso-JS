'use strict';

//# eventos drag 

const circulo = document.querySelector('.circulo');
const cuadrado = document.querySelector('.cuadrado')

//# se activa cuando se empieza a arrastrar
// circulo.addEventListener('dragstart',()=>console.log('se ha empezado a arrastrar'));

//#se activa cuando se arrastra el elemento seleccionado
// circulo.addEventListener('drag',()=>console.log('arrastrando'));

//#se activa cuando se termina de arrastrar
// circulo.addEventListener('dragend',()=>console.log('se ha soltado el elemento'));

//# se activa cuando se arrastra un elemento dentro
cuadrado.addEventListener('dragenter',()=>console.log(1));

//# se activa cuando se arrastra un elemento por encima 
cuadrado.addEventListener('dragover',(e)=>{
    // con prevent default hacemos que dragover pueda hacer drop
    e.preventDefault();
    console.log(2);
});

//# se activa cuando se deja de arrastrar al elemento 
cuadrado.addEventListener('drop',()=>console.log(3));

//# se activa cuando se arrastra un elemento hacia afuera
cuadrado.addEventListener('dragleave',()=>console.log(4));