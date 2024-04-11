
//# Ajax 

//creando una peticion
const request = new XMLHttpRequest();

// manejando un evento para mostrar la el estado de la petición
request.addEventListener('readystatechange',()=>{
    //para acceder al estado de la peticion readyState
    console.log(request.readyState);
    //para acceder a la respuesta de la peticion response
    console.log(request.response);
    console.clear();
})

//* para verificar el status 
// console.log(request.status);

//validando la solicitud para obtener la informacion
// se hace una validacion para el estado de la solicitud con readyState y otra para el status que tiene que ser igual a 200
// request.addEventListener('readystatechange',()=>{
//     if (request.readyState==4 && request.status==200){
//         console.log(request.response);
//     }
// })
// ! ya no es necesario 

//forma optima de hacerlo con load
request.addEventListener('load',()=>{
    let respuesta;
    if (request.status==200) respuesta= request.response;
    else respuesta = 'Lo sentimos, no se ha encontrado el recurso';
    //el dato se recibe en string, por eso se tiene que convertir a un objeto JSON
    console.log(JSON.parse(respuesta).nombre);
    console.log(JSON.parse(respuesta).edad);
    // si se tuviera que enviar a un servvidor, tendria que serializarse (convertir a string)
})

//estados de la solicitud
//* 1: la solcitud se creo correctamente
//* 2: la solicitud se envio correctamente
//* 3: la solicitud se esta procesando (devuelve una respuesta)
//* 4: ya se dio la respuesta y el resultado se pude utilizar(devuelve una respuesta)

// metodo GET para hacer peticiones
request.open("GET","info.txt");

// metodo send para enviar la peticion
request.send();
