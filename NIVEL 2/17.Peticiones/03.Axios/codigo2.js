
//# fetch con await y async

const getName = async ()=> {
    let request = await fetch('info.txt');
    let resultado = await request.json();
    let HTMLCode = `Nombre: <b>${resultado.nombre}</b><br>`;
    let div = document.createElement('DIV');
    div.classList.add('resultado');
    div.innerHTML=HTMLCode
    document.body.appendChild(div);
}

const getAge = async ()=> {
    let request = await fetch('info.txt');
    let resultado = await request.json();
    let HTMLCode = `Edad: <b>${resultado.edad}</b><br>`;
    let div = document.createElement('DIV');
    div.classList.add('resultado');
    div.innerHTML=HTMLCode
    document.body.appendChild(div);
}



const btnName = document.getElementById('name');
btnName.addEventListener('click',getName)


const btnAge = document.getElementById('age');
btnAge.addEventListener('click',getAge)