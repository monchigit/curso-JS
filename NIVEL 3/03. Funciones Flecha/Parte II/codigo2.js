'use strict';
//# funciones flecha 

//trabajando con clausulas, son funciones que retornan otras funciones

const cambiarTamaño = tamaño =>{
    return ()=>{document.querySelector('.texto').style.fontSize = `${tamaño}px`}
}

const px12 = cambiarTamaño(12)
const px14 = cambiarTamaño(14)
const px16 = cambiarTamaño(16)


document.querySelector('.t12').addEventListener('click',px12);
document.querySelector('.t14').addEventListener('click',px14);
document.querySelector('.t16').addEventListener('click',px16);