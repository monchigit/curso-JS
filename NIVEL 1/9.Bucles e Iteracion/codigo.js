//# Bucles

//* Bucle While 

let numeroParaSummar=0;

// comparando un if con el while 

if (numeroParaSummar <10) {
    numeroParaSummar++;
    // document.write(numeroParaSummar + '<br>')
};

//* usando un bucle while
// verifica la condicion y luego ejecuta el bloque

numeroParaSummar=0;
while (numeroParaSummar<10) {
    numeroParaSummar++;
    // document.write(numeroParaSummar + '<br>')
};

//* usando un bucle do while
// primero se ejecuta el bloque y luego se verifica la condicion

let numero=0;
do {
    // document.write(numero + '<br>');
    numero++;
} while (numero<=6);

// * usando un break 

numero=0;
while (numero<1000) {
    numero++;
    // document.write(numero + '<br>');
    if (numero==10) {
        break;
    };
};