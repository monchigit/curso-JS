
let confirmar = confirm('Desea ver la información de la página WEB?')
const dominio = window.location.hostname;
const URL=window.location.href;
const protocolo=window.location.protocol;
const ruta=window.location.pathname

if (confirmar==true){
    document.write(`
    El protocolo del sitio WEB es: <b>${protocolo}</b><br>
    El dominio del sitio WEB es: <b>${dominio}</b><br>
    La rutadel sitio WEB es: <b>${ruta}</b><br>
    La URL del sitio WEB es: <b>${URL}</b><br>
    `);
};