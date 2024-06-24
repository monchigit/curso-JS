'use strict';

//# MatchMedia, trabaja con responsive design, recomendado solo para cosas que no se puedan hacer en CSS

const mq = matchMedia('(max-width: 500px)');
const caja = document.querySelector('.caja');

console.log(mq);

//verifica si se cumple la mediaquery
// console.log(mq.matches);

//change se ejecuta cuando matches cambia de valor
mq.addEventListener('change',()=>{
    if (mq.matches) caja.classList.replace('caja','responsive-caja')
    else if (caja.className=='responsive-caja') caja.classList.replace('responsive-caja','caja')
})
window.addEventListener('load',()=>{
    if (mq.matches) caja.classList.replace('caja','responsive-caja')
    else if (caja.className=='caja-responsive') caja.classList.replace('responsive-caja','caja')
})

// ! NOTA: esta API no se usa para dar estilos