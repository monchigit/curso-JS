
const materia = document.querySelector('.materia')

const notas = [
    ['Matemática 1',7],
    ['Matemática 2',9],
    ['Programación 1',8],
    ['Programación 2',7],
    ['Programación 3',6],
    ['Lógica',9],
    ['Química',5],
    ['Física 1',8],
    ['Física 2',7]
];

const obtenerNombre = (name)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(name)},Math.random()*500);
    });
};

const obtenerNota = (nota)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(nota)},Math.random()*500);
    });
};

let htmlCode=`<div class="notas-container">`;
const mostrarDatos = async ()=>{
    for (let i=0;i<notas.length;i++){
        let nombre=await obtenerNombre(notas[i][0]);
        let nota=await obtenerNota(notas[i][1]);
        htmlCode+=`
        <div class="div-item materia">${nombre}</div>
        <div class="div-item nota">${nota}</div>
        `
    };
    document.body.innerHTML+=htmlCode+`</div>`
};

mostrarDatos();