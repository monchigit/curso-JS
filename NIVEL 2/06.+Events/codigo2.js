
//# eventos de teclado

const contenedor1 = document.querySelector('.contenedor');
const input = document.querySelector('.input-prueba');

//* keydown, ocurre cuando un usuario presiona una tecla en el elemento
input.addEventListener('keydown',(e)=>{
    console.log('una tecla fue presionada');
});

//* keydown, ocurre cuando un usuario presiona y suelta una tecla en el elemento
input.addEventListener('keypress',(e)=>{
    console.log('un usuario presiono una tecla y la soltó');
});

    //* keydown, ocurre cuando un usuario suelta una tecla en el elemento
input.addEventListener('keyup',(e)=>{
    console.log('una tecla fue soltada');
});


