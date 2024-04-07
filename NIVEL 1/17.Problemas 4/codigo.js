const sumar = (num1,num2) => {
    return parseInt(num1)+parseInt(num2);
};

const restar =(num1,num2) => {
    return parseInt(num1)-parseInt(num2);
};

const multiplicar = (num1,num2) => {
    return parseInt(num1)*parseInt(num2);
}

const dividir = (num1,num2) => {
    return parseInt(num1)/parseInt(num2);
}

const potencia = (num1,num2) => {
    return num1**num2
}

const raizCuadrada = (num1) => {
    return Math.sqrt(num1)
}

const raizCubica = (num1) => {
    return Math.cbrt(num1)
}

let operacion=prompt('Que operación desea realizar?\n1:Suma, 2:Resta, 3:Multiplicación, 4:División, 5:Potencia 6:Raiz cuadrada, 7:Raiz Cubica');
if (operacion<1 || operacion>7){
    alert('No se ha encontrado la operacion')
}
else {
    let resultado;
    let num1=prompt('Ingresa un número a operar');
    let num2;
    if (operacion==6 || operacion==7) {
        num2=NaN
    }
    else {
        num2=prompt('Ingresa el segundo número a operar');
    };
    if (operacion==1 || operacion=='s' || operacion=='S') {
        resultado=sumar(num1,num2)
    }
    else if (operacion==2 || operacion=='r' || operacion=='R') {
        resultado=restar(num1,num2)
    }
    else if (operacion==3 || operacion=='m' || operacion=='M') {
        resultado=multiplicar(num1,num2)
    }
    else if (operacion==4 || operacion=='d' || operacion=='D') {
        resultado=dividir(num1,num2)
    }
    else if (operacion==5 || operacion=='p' || operacion=='P') {
        resultado=potencia(num1,num2)
    }
    else if (operacion==6) {
        resultado=raizCuadrada(num1)
    }
    else if (operacion==7) {
        resultado=raizCubica(num1)
    };
    document.write(`Tu resultado es ${resultado}`)
}
