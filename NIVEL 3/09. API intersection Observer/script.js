'use strict';

const cajas = document.querySelectorAll('.caja');

const verifyVisibility = (entries)=>{
    for (const entry of entries) {
        if (entry.isIntersecting) console.log('se esta viendo'+entry.target.textContent);
    }
}

//para indicar a que altura se quiere trabajar con el evento
const options = {
    // rootMargin: '60px';
    // treshold: [0.5]
}

const observer = new IntersectionObserver(verifyVisibility,options);

for (const caja of cajas) {
    observer.observe(caja);
}