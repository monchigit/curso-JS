//# bucle for
//? consta de tres partes
// declarar las variables, inicializar las variables, iterar las variables

//* tambien se puede declarar la variable fuera del bucle
// let i = 1
// for (i; i <= 6; i++) {
//     //? i solo esta definida dentro del bucle debido al let 
//     document.write(i + "<br>")
// }

for (let i = 1; i < 20; i++) {
    // i solo esta definida dentro del bucle debido al let 
    if (i==12) {
        // se usa el continue para saltar un paso del bucle
        continue;
    }
    // document.write(i + "<br>");
};

// # bucle for in y for of 
// se recorre el indice del array

let animales = ['gato','perro','tiranosaurio rex'];

for (animal in animales) {
    document.write(animal + '<br>');
    // devuelve la posicion del elemento
    // tambien recorre las propiedades asociadas
    document.write(animales[animal] + '<br>');
    // para obtener sus valores en for in, se accede al array con el indice como la variable que recorre el bucle
};

document.write('<br>');'<br>'

for (animal of animales) {
    document.write(animal + '<br>');
    // devuelve el valor del elemento
};

// # sentencia label

let array1=['pedro','marcelo','camilo'];
let array2=['maria','marcelita',array1,'capriles'];

forRancio:
for (array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
        }
        // para terminar el primer for se usa la sentencia label, si no solo se termina el for anidado
        break forRancio;
    }
    else {
        document.write(array2[array] + '<br>');
    }
};