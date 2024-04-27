'use strict';
//# funciones flecha 

//funcion recursiva:  una funcion que se llama a si misma 

const validarEdad = (msg)=>{
    let edad ;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt('Introduce tu edad');
        edad = parseInt(edad);
        if (isNaN(edad)) throw 'Introduce un numero valido';
        if (edad > 18) console.log('eres mayor de edad');
        else console.log('eres menor de edad');
    } catch (e) {
        validarEdad(e);
    }
}

validarEdad()
