'use strict';

//# operador spread, es el operador del parametro res

let valor1 = 'valor 1';
let valor2 = 'valor 2';
let valor3 = 'valor 3';

let arr = ['valor 1','valor 2','valor 3','valor 4'];

// sin operador spread
console.log(valor1,valor2,valor3);

//con operador spread
// desarma el array y toma sus valores
console.log(...arr);