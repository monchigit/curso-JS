// variable: Espacio que se guarda en memoria
// se pueden declarar, inicializar o declarar a lo largo del tiempo
//! despues de cada afirmacion va un punto y coma ; 

recipiente="barbijo"
// alert(recipiente)

//* Tipos de datos

//? string es un texto cualquiera, se pueden usar comillas o comillas simples
string='cadena de texto'

//? number es un numero 
// number=19

//? bool, puede ser true o false 
bool=true

// formas para declarar una variable:
//* var,let,const

//? declara la variable en todo el espacio
var numero1=5

//? declara la variable en un bloque
let numero2=8

//? es una constante, no se puede redefinir su valor, si se intenta, arroja un error en consola 
const nombre='moises'

// declarar una variable, aqui se define el alcance que va a tener 
//* primero se declara la variable y su valor sera undifined hasta que se le asigne un valor
//* si no declaramos la variable no se puede usar

let numero; //alcance en un solo bloque
// alert(numero) arroja undifined porque primero se mostro la variable sin asignarle eun valor
numero=390

//* se puede declarar e inicializar una variable en una misma linea

let numero3=8; 
numero3=5;
// alert(numero3);

// const se tiene que inicializar y declarar en la misma linea, de lo contrario arroja error 
const numero4=9;
// alert(numero4);

//! casos especiales de datos 

//? undefined, cuando se declara la variable pero no se le asigna un valor

//multiples variables

let number,number2,nummber3;
number=2;
number2=5;
number3=7;
// alert(number);
// alert(number2);
// alert(number3);

//? Null es un dato vacio
let palabra=null 

//? NaN aparece cuando intentamos hacer una operacion con numeros y uno de los datos is Not a Number (NaN)

let number4=5;
let number5='moises';
// alert(number4*number5);

//! prompt es una funcion que almacena el valor que se introduce

let nombre10=prompt('dime tu nombre');
alert('hola '+nombre10)