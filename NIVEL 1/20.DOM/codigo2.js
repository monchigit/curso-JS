//# definir,obtener y eliminar valores de atributos 

const rangoEtario = document.querySelector('.rangoEtario');
document.write('<br>');

//cambiando o creando un atributo, el primer parametro es el atributo a cambiar/crear, y el segundo el nuevo valor 
rangoEtario.setAttribute('type','number');

document.write('<br>');
//obtener un valor del atributo
let tipoAtributo = rangoEtario.getAttribute('type');
document.write(tipoAtributo)

document.write('<br>');
//eliminar el valor del atributo 
let atributo = rangoEtario.removeAttribute('type');
document.write(rangoEtario.getAttribute('type'))

