
//# Problema 6

const contenedor = document.querySelector('.flex-container');

function crearLLave(nombre,modelo,precio) {
    let img = '<img class="llave" title = "Llave" src="llave.png">';
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}$</b></p>`;
    return [img,nombre,modelo,precio];
};

let fragmento = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*1000);
    let random = Math.round(Math.random()*10+30);
    let llave = crearLLave(`Llave${i}`,`Modelo ${modeloRandom}`,`${random}`);
    let div = document.createElement('DIV');
    div.classList.add(`item-${i}`,`flex-item`)
    div.innerHTML= llave[0] + llave[1] + llave[2] + llave [3];
    div.tabIndex=i
    div.addEventListener('click',()=>{
        document.querySelector('.key-data').value = modeloRandom
    });
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento)
