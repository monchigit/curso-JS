//# implementando  promesas en el codigo

class Persona {
    constructor(nombre,instagram){
        this.nombre=nombre;
        this.ig=instagram;
    }
};

const data = [
    ['Moises Sanchez','@monchi01'],
    ['Sofia Sanchez','@monchi02'],
    ['Josman Sanchez','@monchi03'],
    ['Alexis Sanchez',],
];

const personas=[];

for (let i=0;i<data.length;i++){
    personas[i]=new Persona(data[i][0],data[i][1]);
};

const obtenerPersona = (id)=>{
    return new Promise((res,rej)=>{
        if (personas[id]==undefined) rej('no se ha encontrado la persona');
        else res(personas[id]);
    })
}

const obtenerInstagram = (id)=>{
    return new Promise((res,rej)=>{
        if (personas[id].ig==undefined) rej('no se ha encontrado el instagram');
        else res(personas[id].ig);
    })
}

let id=2;

obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram)
}).catch((e)=>{
    console.log(e);
})