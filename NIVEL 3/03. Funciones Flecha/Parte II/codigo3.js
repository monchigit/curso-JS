'use strict';
//# funciones flecha

//parametros por defecto

//se recomienda poner el valor del parmetro en su declarcion
const suma = (a,b=0)=>{
    
    //forma no recommendada de poner un valor por defecto
    //* b = typeof b !== 'undefined' ? b : 0;

    //otra forma de hacerlo
    //* b= b || 0;

    console.log(a+b);
}

suma(10)

//# parametro rest 

//rest siempre es el ultimo parametro de todos

const sumar = (...num)=>{
    let res=0;
    for (let i = 0; i < num.length; i++) {
        res += num[i];
    }
    console.log(res);
}

sumar(32,42,32,23,23)