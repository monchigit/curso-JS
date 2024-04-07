//# event flow


// Event Bubbling,  por defecto se ejecutan los eventos mas especificos (los eventos que estan con los hijos)

const contenedor1 = document.querySelector('.contenedor-1');
const contenedor2 = document.querySelector('.contenedor-2');
const button = document.querySelector('.button3');


// para cambiar el flujo de eventos se le añade un parametro mas al event listener (true) del evento que deseamos que ocurra primero 
contenedor1.addEventListener('click',(e)=>{
    alert('Di click en un contenedor');
},true);

contenedor2.addEventListener('click',(e)=>{
    alert('Di click en un contenedor 2');
});

// para detener la propagacion de los demas eventos que sigan acontinuación
button.addEventListener('click',(e)=>{
    alert('Di click en un boton');
    e.stopPropagation();
});
