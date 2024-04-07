
//# propiedades de siblings

const contenedor = document.querySelector('.contenedor');

const h2_antiguo = document.querySelector('.h2');
const h4 = document.querySelector('.h4');

// accede al siguiente nodo hermano
console.log(h2_antiguo.nextSibling);

// accede al anterior nodo hermano
console.log(h2_antiguo.previousSibling);

// accede al siguiente nodo elemento hermano
console.log(h2_antiguo.nextElementSibling);

// accede al anterior nodo elemento hermano
console.log(h4.previousElementSibling);

// seleccionna al elemento padre ascendente mas cercano de la clase especificada
console.log(h4.closest('.contenedor'));
