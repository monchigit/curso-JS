'use strict';
//# funciones flecha

//no hacce falta el cuerpo si solo hay una linea de cdigo en la funcion
//se puede retornar una expresion si no estan las llaves
const saludar = ()=> 'string';

let resultado = saludar();

console.log(resultado);

//* funcion flecha 2

//parentesis opcionales ante un solo parametro y paretesis obligatorio sin parametros

const saludar2 = nombre => console.log(`hola ${nombre}`);

saludar2('moises');

