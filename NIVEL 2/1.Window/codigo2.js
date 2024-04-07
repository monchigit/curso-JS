//# screen y scroll

const screen = window.screen;

//objeto screen 
console.log(screen);

//altura disponible en la pestaña
let screenHeight = screen.availHeight;
document.write(screenHeight);
document.write('<br>');

//espacio entre el borde izquierdo de la pantalla y el borde derecho de la pestaña
let screenLeft = window.screenLeft;
document.write(screenLeft);
document.write('<br>');

//espacio entre la parte de arriba de la pantalla y la parte de arriba de la pestaña
let screenTop = window.screenTop;
document.write(screenTop);
document.write('<br>');

//scrollX, devuelve el numero de pixeles que el documento se desplaza actualmente en horizontal
const pixelesX = window.scrollX;
alert(pixelesX)

//scrollY, devuelve el numero de pixeles que el documento se desplaza actualmente en vertical
const pixelesY = window.scrollY;
alert(pixelesY)

//scroll, desplaza la ventana a un lugar particular del documento
//? window.scroll(coordenadaX,coordenadaY)