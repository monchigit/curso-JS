//# Atributos globales 

const titulo = document.querySelector('.titulo')

//Modificando el contenido de un elemento para que se pueda editar, valores true o false 
titulo.setAttribute('contentEditable','false')

//Modificando la direccion del texto, tiene por defecto ltr (de derecha a izquierda) puede ser rtl (de izquierda a derecha)
titulo.setAttribute('dir','ltr')

//Modificando la visibilidad del elemento, valores true o false
//? si esta definida hidden, no se mostrará el elemento, paara mostrar el elemento se debe remover el atributo
titulo.setAttribute('hidden','true')
titulo.removeAttribute('hidden')

//indica si un elemento se puede seleccionar,y segun el numero que se utilize sera su orden de selccion
titulo.setAttribute('tabIndex','0')      

//data de el elemento cuando se pasa el mouse encima de el 
titulo.setAttribute('title','titulo 1')
