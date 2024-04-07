// # Funciones 
// ? creando una funcion 

// primero se declara la funcion 
function saludar() {
    let respuesta= prompt('hola moises, como estas?');
    if (respuesta=='bien') {
        // alert('me alegro');
    }
    else {
        // alert('una pena');
    };
};

// para utilizar la funcion hay que llamarla en el codigo
// saludar()

// ? otra forma de crear funciones
// saludar= function() {
//     let respuesta= prompt('hola moises, como estas?');
//     if (respuesta=='bien') {
//         alert('me alegro')
//     }
//     else {
//         alert('una pena')
//     }
// }

// saludar()

// * Return devuelve un valor

function saludar2() {
    return 'la funcion se ejecuto correctamente <br>';
    // return finaliza la funcion
};

let saludo=saludar2();
document.write(saludo);

// * parametros
// creando una funcion que requiere parametros
function sum(num1,num2) {
    let result= num1+num2
    return result;
};

// declarando un dandole un valor a los parametros que van a la funcion
let num1=parseInt(prompt('ingresa un numero'));
let num2=parseInt(prompt('ingresa un numero'));
let suma=sum(num1,num2);
document.write(suma + "<br>");

// * funcion saludar remix 

function saludarRemix(nombre) {
    let frase= `hola ${nombre}, como estas?<br>`;
    // document.write(frase);
}

saludarRemix('moises');

// * Scope, el alcanze de las funciones es global y el de sus variables es regional

// otra forma de crear funciones
const saludar3 = function (nombre) {
    let frase= `hola ${nombre}, como estas?`;
    // document.write(frase);
};

saludar3('sofia')

// # funciones flecha

frase2= `hola ${nombre1}, como estas?`;
const saludar5 = nombre1 => document.write(frase2);

saludar5('moises');

