//# manejador de eventos
// no se usa camel case

const button = document.querySelector('.button');

//! forma obsoleta
// button.onclick = () => {
//     alert('hola');
// }

//# Events listeners

//! no aplican las funciones flecha
// forma correcto de manejar los eventos

function saludar() {
    alert('hola');
    // solo se puede quitar un evento desde la funcion si es una funcion asociada y no en el argumento del evento
    button.removeEventListener('click',saludar)
};

button.addEventListener('click',saludar);

// haciendo que la funcion tome argumentos, no se puede con funciones asociadas
let nombre='moises';
button.addEventListener('click',()=> {
    alert(`Hola ${nombre}`);
});

//# objeto Event 

const button2 = document.querySelector('.button2');

button2.addEventListener('click',(e)=>{
    // el argumento es el objeto, independientemente del nombre
    //objeto.propiedad
    console.log(e.target);
});


