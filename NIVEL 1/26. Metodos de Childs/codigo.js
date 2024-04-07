
//# metodos de childs

const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('P')
parrafo.innerHTML='parrafo comun';

//reemplazando un child 
const h2_nuevo = document.createElement('H2');
h2_nuevo.innerHTML = 'titulo';

const h2_antiguo = document.querySelector('.h2');

contenedor.replaceChild(h2_nuevo,h2_antiguo);

//eliminando un child 
const h4 = document.querySelector('.h4')
contenedor.removeChild(h4)

//verificando si tiene el hijo especificado
let respuesta = contenedor.hasChildNodes();// true o false

if (respuesta){
    document.write('El elemento tiene hijos')
}
else{
    documen.write('El elemento no tiene hijos')
};

