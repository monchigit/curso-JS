
const contenedor = document.querySelector('.contenedor')

// acceder al primer hijo 
const primerHjo = contenedor.firstChild;
console.log(primerHjo)

// acceder al ultimo hijo 
const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo)

// accede al primer elemennt child
const primerHijoElemento = contenedor.firstElementChild;
console.log(primerHijoElemento);

// accede al ultimo elemennt child
const ultimoHijoElemento = contenedor.lastElementChild;
console.log(ultimoHijoElemento);

// accede a todos los child, devuelve una node list, no un array
const hijos = contenedor.childNodes;
console.log(hijos);

//podemos acceder a los nodos de la list
console.log(hijos[1]);
// console.clear();

// se puede recorrer una node list con forEach
//# hijos.forEach(hijo => console.log((hijo)));

//acceder a las etiquetas html de los hijos, devuelve una colleciion HTMl que no se puede recorrer con forEach
const tagsHijos = contenedor.children;
// console.log(tagsHijos);

// para acceder a los valores se usa for of 
for (tagHijo of tagsHijos) {
    console.log(tagHijo);
};

