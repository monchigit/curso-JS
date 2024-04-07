

const contenedor = document.querySelector('.contenedor');

// creando un node element 
const item = document.createElement('LI');

// creando un node text
const textItem = document.createTextNode('Este es un Text Item');

// poniendo un nodo dentro de otro 
item.appendChild(textItem);
contenedor.appendChild(item);

// otra forma 
item.innerHTML = 'Este es un item de la lista'
console.log(contenedor);
