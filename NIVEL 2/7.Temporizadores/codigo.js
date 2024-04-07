
//* setTimeout, realiza una accion despues de un cierto periodo de tiempo
//el primer argumento es una funcion y el segundo es el tiempo que se tomra para realizar la accion (tiempo en ms)
let tempo = setTimeout(() => {
    document.write('hola<br>')
}, 2000); 

//para hacer que no se ejevute la funcion 
clearTimeout(tempo);

//* setInterval, para repetir la funcion varias veces
let intervalo = setInterval(() => {
    document.write('HOLA<br>')
}, 1500);

setTimeout(() => {
    clearInterval(intervalo)
}, 6000);

