// metodos de arrays

// * transformadores

// # pop() elimina el ultimo elemento del array y lo devuelve (no muestra el array)

// # shift() elimina el primer elemento del array y lo devuelve (no muestra el array)

// # push(elemento1,elemento2, ...), agrega elementos al final del array y devuelve la cantidad de elementos que tendra el array modificado

// # unshift(elemento1,elemento2, ...), agrega elementos al inicio del array y devuelve el la cantidad de elementos que tendra el array modificado

// # reverse(), invierte el orden de los elementos de un array

// # sort(), ordena los elementos de un arreglo de menor a mayor o en orden alfabetico

// # splice(start,cantidad de elementos a eliminar,elementos a agregar), cambia el contenido del array, eliminando elementos o añadiendo nuevos, devuelve los elementos eliminados en caso de que haya alguno

// * Accesores 

// # Join(separador), une todos los elementos de un array como una cadena de texto con el separador que queramos, por defecto tiene la coma

// # slice(inicio,final), devuelve los elementos desde la posicion inicial hasta la final sin tomar esta en cuenta

// ! metodos ya vistos que tambien aplican, toString, indexOf(), lastIndexOf(), includes()


let nombres = ['moises','sofia','dayana']; //array original
document.write(nombres+'<br>');

let resultado = nombres.slice(0,2); //metodo

document.write(resultado+'<br>');  
document.write(nombres); //array modificado, solo cambia con metodos transformadores