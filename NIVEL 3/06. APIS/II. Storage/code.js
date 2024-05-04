'use strict';

//# sessionStorage es la información que tenemos en una sesión, cuando actualizamos o cerramos la pestaña, esta se perdio

//# localStorage es la información que tenemos en el dispositivo local

//guarda un valor local
localStorage.setItem('nombre','pedro');
localStorage.setItem('apellido','gomez');

console.log(localStorage);

console.log(localStorage.getItem('nombre'));

//elimina el valor
setTimeout(()=>{
    localStorage.removeItem('nombre','pedro');
    console.log(localStorage);
},3000)

setTimeout(()=>{
    localStorage.clear();
    console.log(localStorage);
},6000)



//guarda un valor en la sesion 
sessionStorage.setItem('nombre','moises');

console.log(sessionStorage);

console.log(sessionStorage.getItem('nombre'));