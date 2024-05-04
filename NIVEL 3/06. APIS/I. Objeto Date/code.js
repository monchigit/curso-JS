'use strict';

//# Objeto Date

const fecha = new Date();

console.log(fecha);

// metodos de date 

//* getDate, devuelve el dia del mes
console.log(fecha.getDate());

//* getDay, devuelve el dia de la semana, dommingo -> 0
console.log(fecha.getDay());

//* getMonth, devuelve el numero del mes, enero -> 0
console.log(fecha.getMonth());

//* getFullYear, devuelve el año
console.log(fecha.getFullYear());

//* getHours, devuelve las horas del dia de hoy
console.log(fecha.getHours());

//* getMinutes, devuelve los minutos de la hora actual
console.log(fecha.getMinutes());

//* getSeconds, devuelve los segundos del minuto actual
console.log(fecha.getSeconds());

//* Date.now(), devuelve la hora unix en milisegundos
console.log(Date.now());