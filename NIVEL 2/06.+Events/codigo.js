
//# Mouse Events

const contenedor1 = document.querySelector('.contenedor-1');
const contenedor2 = document.querySelector('.contenedor-2');
const button = document.querySelector('.button');

//* doble click

button.addEventListener('dblclick',(e)=>{
    alert('Di doble click en un boton');
});

//* mouseover, se activa si se pasa por encima de el elemento o de un elemento hijo de este
// contenedor1.addEventListener('mouseover',(e)=>{
//     alert('puse el cursor sobre el contenedor');
// });

//* mouseout, se activa si se sale de un elemento o de un elemento hijo de este
// contenedor1.addEventListener('mouseout',(e)=>{
//     alert('me sali del contenedor');
// });

//* contextmenu, solo se ejecuta si se aprieta y suelta dentro del 
// contenedor1.addEventListener('contextmenu',(e)=>{
//     alert('di click derecho');
// });

//* mousemove, se ejecuta cuando el cursor se mueve sobre un elemento
// contenedor1.addEventListener('mousemove',(e)=>{
//     alert('movi el cursor');
// });

//* mouseleave, se ejecuta cuando el cursor se mueve fuera de un elemento, no toma a los hijos 
// contenedor1.addEventListener('mouseleave',(e)=>{
//     alert('movi el cursor fuera');
// });

//* mousedown, se ejecuta cuando se aprieta un boton del mouse sobre un elemento
// contenedor1.addEventListener('mousedown',(e)=>{
//     alert('oprimi un boton del mouse');
// });

//* mouseup, se ejecuta cuando se suelta un boton del mouse sobre un elemento
contenedor1.addEventListener('mouseup',(e)=>{
    alert('oprimi un boton del mouse');
});

// contenedor1.addEventListener('click',(e)=>{
//     alert('Di click en un contenedor');
// });

// contenedor2.addEventListener('click',(e)=>{
//     alert('Di click en un contenedor 2');
// });
