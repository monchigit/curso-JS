'use strict';

//# operador spread

//uso de spread, agregar arrays

let arr = ['manzana','pera','banana'];
let arr2 = ['kiwi','mandarina'];

//se desarma el array y se agregan sus componnentes
// arr.push(...arr2);
console.log(arr);

//uso de spread, concatenar arrays

let arr3 = [...arr,...arr2];
console.log(arr3);

//uso de spread, argumento rest de una funcion
const sumar = (num1,num2)=>{
    console.log(num1+num2);
}

arr = [3,6];

sumar(...arr)