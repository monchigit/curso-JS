
//# creando un array 
// hay que declarar el alcance de los arrays

let frutas=["cambur","manzana","pera","guayaba"];

// mostrando un componente del array por su indice, si el indice no tiene un valor asociado es undefined
// document.write(frutas[2]);

//# Arrays asociativos 

let pc= {
    nombre:'moisespc',
    procesador:'intel core I7',
    ram: '16GB',
    espacio: '1TB'
};

//? mostrando un componente del array
// document.write(pc['ram']);

// definiendo variable con un valor del array

let nombre=pc['nombre'];
let procesador=pc['procesador'];
let ram=pc['ram'];
let espacio=pc['espacio'];

let frase=`El nombre de mi computadora es ${nombre} <br> tiene un procesador ${procesador} <br>  con una ram de ${ram} <br>  y un espacio disponible de ${espacio}`;
document.write(frase)