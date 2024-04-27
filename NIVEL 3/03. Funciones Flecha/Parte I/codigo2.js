'use strict';
//# funciones flecha

// no son recomendadas para ser usadas como metodos y no pueden ser usadas como funciones constructores

const objeto = {
    nombre: 'moises',
    saludar: function(){console.log(`Hola ${this.nombre}`)}
}


// en funciones flecha, this llama al objeto que llama al objeto que llama a la funcion, en este caso el objeto window llama a objeto y este a la funncion flecha 

const objeto2 = {
    nombre: 'moises',
    saludar: ()=>{console.log(`Hola ${this.nombre}`)}
}

window.nombre='alberto'

objeto.saludar() //llama a la propiedad nombre del objeto objeto
objeto2.saludar() //llama a la propiedad nombre del objeto window