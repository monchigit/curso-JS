
//# sentencia switch
let expr= 'banana'
switch (expr) {
    case 'banana':
        console.log('Esto es amarillo')
        break;
    case 'pera':
        console.log('Esto es verde')
        break;
    case 'banana':
        console.log('Esto es rojo')
        break;

    default:
        console.log('ninguna de las anteriores')
        break;
};

//otra froma de hacer el if (sin llaves), solo cuando se hace una cosa

if (expr=='banana') console.log('Esto es amarillo');
else if (expr=='verde') console.log('Esto es verde');
else if (expr=='manzana') console.log('Esto es rojo');
else console.log('ninguna de las anteriores');