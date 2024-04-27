'use strict';

//# funciones flecha

// This hace referencia al objeto que esta llamando a la funcion
//fuera de una funcion, This hace referencia a window
//! con use strict, this ya no hace referencia automaticcamente a window si este no esta dentro de un objeto

const objeto = {
    nombre : 'moises',
    saludar //si la propiedad es igual al valor, no hace falta poner el valor 
}

function saludar() {
    console.log(`Hola ${this.nombre}`);
}

objeto.saludar()