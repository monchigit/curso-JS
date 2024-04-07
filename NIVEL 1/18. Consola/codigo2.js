//# funciones de conteo

// cuenta el numero de veces que se llamo a count
console.count()

// reinicia el conteo 
console.countReset()

//# funciones de agrupacion 

//crea un nuevo grupo del registro de la consola, todos los console que se muestren en consola luego de su decclaracion estaran dentro del grupo , se puede tener un grupo dentro de otro, se le puede dar un nombre al grupo  
console.group("grupo")
console.log('hola')
console.dir(['hola',])
console.error('hola')

// salir del grupo actual 
console.groupEnd()
console.log('hola')

//crea un grupo que aparece cerrado, misma funcion del group 
console.groupCollapsed('tontos')
console.groupEnd()

//# funciones de temporizacion 

// inicia un temporizador
console.time()

//dice cuando tiempo paso desde que se inicio el temporizador
console.timeLog()

//finaliza el temporizador y muestra el tiempo total
console.timeEnd()

//# modificar el texto
console.log('%chola','color:white;background-color:black')