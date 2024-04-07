
//# atributos de inputs

const input= document.querySelector('.input-normal');
//!importante el camelCase

// accede a la clase del elemento
document.write(input.className);
document.write('<br>');

// accede al valor que tiene el input
document.write(input.value = 'input jeje');
document.write('<br>');

// accede al tipo de input 
document.write(input.type = 'file');
document.write('<br>');

// accede a lo que acepta
input.accept = 'image/png';
document.write('<br>');


const input1= document.querySelector('.input-normal2');
// accede a la minima cantidad de caracteres que debe tener un input
input1.minLength = 5;

// placeholder
input1.placeholder='Hola mami'

// accede al valor required, en caso de que sea necesario para el submit
input1.required=' '