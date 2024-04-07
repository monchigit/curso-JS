
//#eventos de la interfaz

const img = document.querySelector('.img-prueba');
const input = document.querySelector('.input-prueba');
const contenedor = document.querySelector('.seleccionado')

//* error, ocurre si la imagen no termina de cargar
img.addEventListener('error',()=>{
    console.log('ha sucedido un error');
});

//* load, ocurre cuando se carga la pagina
addEventListener('load',()=>{
    console.log('Cargó la página');
});

//* beforeunload, ocurre cuando se carga la pagina
addEventListener('beforeunload',()=>{
    console.log('estas a punto de irte del sitio');
});

//* unload, ocurre cuando se carga la pagina
addEventListener('unload',()=>{
    console.log('te fuiste del sitio');
});

//* resize, ocurre cuando cambia el tamaño de vista del documento
addEventListener('resize',()=>{
    console.log('el tamaño cambió');
});

//* scroll, ocurre cuando se hace scroll
addEventListener('scroll',()=>{
    console.log('se hizo scroll');
});

//* select, ocurre cuando el usuario selecciona un texto de un input o un text area 
input.addEventListener('select',(e)=>{
    console.log('se ha seleccionado texto del input');
    //se puede acceder a varias propiedades
    console.log(e.target.selectionStart);
    console.log(e.target.selectionEnd);

    //obteniendo el texto seleccionado
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.textContent = textoCompleto.substring(start,end);
});


