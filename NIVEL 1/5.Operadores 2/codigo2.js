
//* operadores logicos, solo funcionan con valores true o false y devuelven valores true o false 

let valor1=true;
let valor2=true;

// Operador AND (&&), si las dos afirmaciones son true, devuelve true, si al menos una es falsa, devuelve false
let resultaso1= valor1 && valor2;

// Operador OR (||), si las dos afirmaciones son true, devuelve true, si al menos una es true, devuelve true, si ambas son falsas, devuelve false
let resultaso2= valor1 || valor2;

// Operador NOT (!), regresa lo contrario del valor ingresado, true->false, false->true
let resultaso3= !valor1;

document.write(resultaso2)