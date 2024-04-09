
const materiasHTML = document.querySelector('.materias');

const materias = [
    {
        nombre: 'Fisica 4',
        nota: 7
    },
    {
        nombre: 'Cálculo 4',
        nota: 8
    },
    {
        nombre: 'Base de datos 3',
        nota: 9
    },
    {
        nombre: 'Programación 5',
        nota: 7
    },
    {
        nombre: 'Lógica 3',
        nota: 9
    },
]


const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        let materia = materias[id];
        if (materia==undefined) reject('La materia no existe');
        setTimeout(()=>{resolve(materia)},Math.random()*500);
    })
};

const devolverMaterias = async ()=> {
    let materia =[];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML+= newHTMLCode;
    };
};

devolverMaterias()