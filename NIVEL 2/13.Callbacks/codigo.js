
//# callbacks, una función que llama a otra función

function prueba(callbacks) {
    callbacks('pedro');
}

function decirNombre(nombre) {
    console.log(nombre);
}

prueba(decirNombre)
console.clear()


// otra manera de escribirla

function prueba(callback) {
    callback();
}

prueba(()=> console.log('pedro'));

