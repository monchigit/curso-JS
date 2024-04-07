
//# funciones asincronas, esperan a recibir información y se ejecutan

const objeto = {
    propiedad1 : 'valor1',
    propiedad2 : 'valor2',
    propiedad3 : 'valor3'
};

const obtenerInformacion = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=> {res(objeto)},3000)
    })
};

// obtenerInformacion().then(resultado => console.log(resultado));

// const mostrarResultado =async ()=>{
//     let resultado = await obtenerInformacion();
//     console.log(resultado);
// }

// mostrarResultado()

//# otro uso de async y await, puede ordenar el orden de pedido de la información al servidor
// await espera a que se obtenga la informacion y luego pasa a la siguiente

const obtenerTexto = (texto)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=> {res(texto)},Math.random()*500)
    })
};

const mostrarData = async ()=> {
    data1=await obtenerTexto('1: buceta');
    data2=await obtenerTexto('2: sutano');
    data3=await obtenerTexto('3: mengano');
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();