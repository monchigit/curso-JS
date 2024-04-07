// # problema: dejar pasar solo a los mayores de edad, la primera persona que entra despues de las 2am no paga

let free = false; 

const validarCliente = time => {
    let edad = prompt('ingresa tu edad');
    if (edad>=18) {
        if (time >= 2 && time <7 && free==false) {
            alert('puedes pasar gratis porque eres el primero en llegar despues de las 12');
            free=true;
        }
        else {
            alert(`son las ${time}:00hrs puedes pasar,pero tienes que pagar`)
        };
    }
    else {
        alert('no puedes pasar, estupido')
    };
};

validarCliente()