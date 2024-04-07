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

let operacion=prompt('Que operación desea realizar?\n1:Suma, 2:Resta, 3:Multiplicación, 4:División');
if (operacion<1 || operacion>4){
    alert('No se ha encontrado la operacion')
}
else {
    let resultado;
    let num1=prompt('Ingresa el primer número');
    let num2=prompt('Ingresa el segundo número');
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
    };
    document.write(`Tu resultado es ${resultado}`)
}
