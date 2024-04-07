

// devuelve la URL de la página
const href = window.location.href;
document.write(href);
document.write("<br>")

//devuelve el nombre del dominio del servidor
const dominio = window.location.hostname;
document.write(dominio);
document.write("<br>")

// devuelve la ruta completa del archivo
const ruta = window.location.pathname;
document.write(ruta);
document.write("<br>")

// devuelve el protoccolo del archivo
const protocolo = window.location.protocol;
document.write(protocolo);
document.write("<br>")

//cargar un nuevo documento en la misma pestaña 
//? window.location.assign('https://facebook.com')