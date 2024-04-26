'use strict';

//# con funciones

// function hablar(texto,texto) { //!muestra un error de parametro duplicado
//     console.log(texto);
// }

// hablar('hola','hola');

//# delete en objetos o varibles

let variable = 'nombremio';

// delete variable //! no se pueden eliminar variables, objetos o  funciones, solo propiedades de objetos

const obj = {nombre:'moises'}

delete obj.nombre;

console.log(obj.nombre);