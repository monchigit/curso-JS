'use strict';

const publicaciones = document.querySelector('.publicaciones');
// let contador=0;

const publicationCode = (name,content) =>{
    const container = document.createElement('div');
    const nombre = document.createElement('h3');
    const contenido = document.createElement('p');
    const comentarios = document.createElement('div');
    const btnComent = document.createElement('input');
    const btnSend = document.createElement('input');

    container.classList.add('publicacion');
    comentarios.classList.add('comentarios');
    btnComent.classList.add('comentario');
    btnSend.classList.add('enviar');

    btnComent.setAttribute('placeholder','Escriba un comentario');
    btnSend.type = 'submit';

    nombre.textContent = name;
    contenido.textContent = content;

    comentarios.appendChild(btnComent);
    comentarios.appendChild(btnSend);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}

const cargarMasPub = entry => {
    if (entry[0].isItersecting) cargarPubliciones(3);
}

const observer = new IntersectionObserver(cargarMasPub);

const cargarPubliciones = async num => {
    const request = await fetch('info2.txt');
    const content = await request.json();
    const arr = content.content;
    const fragmento = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
        const newPublicacion = publicationCode(arr[i].nombre,arr[i].contenido);
        fragmento.appendChild(newPublicacion);
        if (i == num-1) observer.observe(newPublicacion);
    }
    publicaciones.appendChild(fragmento)
}

cargarPubliciones(6);