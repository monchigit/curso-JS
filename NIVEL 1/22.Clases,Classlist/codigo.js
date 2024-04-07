
const titulo = document.querySelector('.titulo');


// añade una clase
titulo.classList.add('grande');

// remueve una clase
//? titulo.classList.remove('grande')

// devuelve el valor de la clase del indice especificado
let valorClase = titulo.classList.item(1);
document.write(valorClase) //grande

document.write('<br>')
//verificar si la clase especificada esta en el objeto
let valorClase2 = titulo.classList.contains('grande');
document.write(valorClase2)


document.write('<br>')
// añadir o remover una clase dependiendo de si esta o no, si tiene la clase remueve, si no agrega
//!si como segundo parametro se le da true, aunque tenga la clase, no la remueve
titulo.classList.toggle('rancio')

//reemplazar una clase por otra 
titulo.classList.replace('rancio','hola')