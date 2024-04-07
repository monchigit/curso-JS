
//# promesas 

let nombre='ped5ro'

const promesa = new Promise((resolve,reject)=>{
    if (nombre != 'pedro') reject('Lo siento, el nombre no es pedro');
    else resolve(nombre);
})

//cuando se cumple la promesa y se quiere acceder al valor del resolve, se usa then
//! cuando la promesa no se cumple arroja un error, si se quiere acceder al valor del reject se usa promise().catch

promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
})