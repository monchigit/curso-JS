

const titulo = document.querySelector('.titulo');

// textContent devuelve todo el contenido del elemento, no devuelve el HTML

// innerHTML devuelve el codigo HTML

// outerHTML devuelve todo el contenido con las etiquetas HTML
let resultado = titulo.outerHTML;
document.write(resultado)