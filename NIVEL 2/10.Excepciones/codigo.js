
//# try catch 
//no se manejan errores de sintaxis, sino errores basados en un comportamiento esperado

//# catch incondicional
try {
    console.log('Aquí no ha pasado nada');
    dfqddafda
} catch (error) {
    console.log("Lo siento, ocurrio un error de referencia")
}

//nota: typeof te permite ver el tipo de dato 

//# catch condicional

try {
    fwfwfeefw
} catch (error) {
    if (3>5) console.log('Ha ocurrido un error');
    else console.log('crack')
}
console.clear();

//# finally

try {
    nfjonieoq
} 
catch (error) {
    if (3>5) console.log('Ha ocurrido un error');
    else console.log('crack');
}
//se ejecuta sin importar que
finally {
    console.log('me muestro igual')
    } 
console.clear();

const pruebaTry = () => {
    try {
        return 1;
    } catch (error) {
        return 2;
    } 
    //el finally reescribe el valor retornado al tener mayor prioridad
    finally {
        return 3;
    }
}
console.clear()
console.log(pruebaTry())

//# sentencia throw

try {
    //throw devuelve una excepción,funciona tambien fuera de un try
    //tambien puede devolver objetos o arrays
    throw {
        error: 'NombreDelErorr',
        info: 'La Cigueñaaaaaaa'
    }
} 
// el valor de err es lo declarado en throw
catch (err) {
    console.log(err);
    //accediendo a los elementos del objeto error
    console.log(err.error);
    console.log(err.info);

} finally {

}

