
//# use strict
'use strict';

// nombre='lucas'; //!muestra un error si no se declara la variable

//#modificando propiedades

const objeto = {}

Object.defineProperty(objeto,'nombre',{value:'moises',writeable:false}); //hace que la propiedad sea irredefinible

// objeto.nombre = 'sofia'; //!muestra un error en consola con modo strict

console.log(objeto.nombre);

//# agregar propiedades 

const obj = {nombre : 'sofia'};

Object.preventExtensions(obj); //evita que se agreguen propiedades

// obj.apellido = 'sanchez'; //!muestra un error en consola con modo strict

console.log(obj.nombre);


//# no se puede agregar propiedades a un string 

const str = 'moises sanchez';

// str.canal = 'EoEoEo'; //!muestra un error en consola con modo strict al intentar agregar una propiedad a un string

console.log(str.canal);