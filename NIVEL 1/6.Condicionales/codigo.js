//* Camel case, la primera palabra es toda en minuscula y la segunda,tercera,cuarta... se empiezan con mayuscula
// holaComoEstas= "hola como estas"

//# Condicionales Js

//* if solo ejecuta el bloque de codigo si la condicion se cumple
let nombre= 'socio';
if (nombre=='sofia') {
    alert(`tu nombre es ${nombre}`);
}

//* si if no se cumple se verifica si else if si se cumple, se pueden poner tantos else if como se quiera 
else if (nombre== 'moises') {
    alert(`tu nombre es ${nombre}`);
}

//* si nada de lo anterior se cumple, se ejecuta else
else {
    alert('tu nombre es otro');
}