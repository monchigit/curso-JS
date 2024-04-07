
// * De repeticion 

// # forEach(funcion), recibe como argumento una funcion y la ejecuta sobre cada elemento del array

// # filter(funcion), recibe una funcion como argumento y lo ejecuta sobre cada elemento del array pero genera un nuevo array con elementos que cumplen una condicion dada


let nombres = ['moises','sofia','dayana','josman','fulanito']; //array original


let resultado = nombres.filter(nombre => nombre.length > 6); //metodo

document.write(resultado)