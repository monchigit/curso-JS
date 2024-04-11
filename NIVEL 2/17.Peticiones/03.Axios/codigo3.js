
//# axios con await y async

const getName = async ()=> {
    let resultado = await axios('info.txt');
    let HTMLCode = `Nombre: <b>${resultado.data.nombre}</b><br>`;
    let div = document.createElement('DIV');
    div.classList.add('resultado');
    div.innerHTML=HTMLCode
    document.body.appendChild(div);
}

const getAge = async ()=> {
    let resultado = await axios('info.txt');
    let HTMLCode = `Edad: <b>${resultado.data.edad}</b><br>`;
    let div = document.createElement('DIV');
    div.classList.add('resultado');
    div.innerHTML=HTMLCode
    document.body.appendChild(div);
}



const btnName = document.getElementById('name');
btnName.addEventListener('click',getName)


const btnAge = document.getElementById('age');
btnAge.addEventListener('click',getAge)