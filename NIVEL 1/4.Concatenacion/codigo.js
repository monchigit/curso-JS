
//* concatenar dos cadenas de texto

saludo='hola pedro!';
pregunta=' como estas?';

frase=saludo+pregunta;

// document.write(frase);

//* concatenar forzando string

numero1=13;
numero2=8;

resultado="" + numero1 + numero2;

// document.write(resultado);

//* concatenar con concat
//! el metodo se le debe aplicar a un string 

numero3="13";
numero4=8;

resultado2= numero3.concat(numero4);

// document.write(resultado2);

//* concatenar con backtiks y la variable entre ${}
//! en vez de usar comillas se usan bactiks
//se puede escribir codigo html dentro de los backtiks

frase1= "moises sanchez";

frase2= `soy ${frase1} y estoy caminando`;

// document.write(frase2);

//* escape de comillas simples
//! si se usa un tipo de comilla varias veces, el string se cierra y se abre
// si se van a usar comillas simples en la cadena, se deben usar comillas dobles para el string y viceversa
//! no se pueden usar varios backtiks en una cadena al igual que con las comillas

nombre='moises sanchez';
frase3="mi nombre es 'moises' y soy crack";

document.write(frase3)