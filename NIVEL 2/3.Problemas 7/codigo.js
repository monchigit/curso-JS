
let ancho = window.screen.width;
let alto = window.screen.height;

let comprar = confirm(`La resolución es de ${ancho}x${alto}. Desea comprar este producto?`);
if (comprar==true){
    alert('Felicidades por su compra');
}
else {
    alert('Compra cancelada');
};