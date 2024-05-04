'use strict';

//validacion comun
let edad = 17;

if (edad>18) console.log('es mayor de edad');
else console.log('es menor de edad'); 

//# validacion con eperador ternario
// los parentesis son necesarios si se trabaja con mas de una accion, y se separann con comas
// consume menos recursos que el if

(edad>18)
        ? 
        (
        console.log('es mayor de edad'),
        console.log('puede pasar')
        ) 
        : 
        (
        console.log('es menor de edad'),
        console.log('no puede pasar')
        );