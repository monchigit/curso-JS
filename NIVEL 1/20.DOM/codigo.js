
//# forma para seleccionar elementos

//seleccionar un objeto entero por su id 
let parrafo = document.getElementById('parrafo');
document.write(parrafo+'<br>')

//seleccionar elemento por su etiqueta 
let parrafo1 = document.getElementsByTagName('p');//decuelve una lista de elementos p, se puede acceder con un indice 
document.write(parrafo1[0]+'<br>')

// query selector devuelve el primer elemento de un grupo de selectores
let parrafo2=document.querySelector('.parrafo')
document.write(parrafo2+'<br>')

// query selector all devuelve un node list 
let parrafo3=document.querySelectorAll('.parrafo')
document.write(parrafo3+'<br>')