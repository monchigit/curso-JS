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
    ['Alexis Sanchez','@monchi04'],
];

const personas=[];

for (let i=0;i<data.length;i++){
    personas[i]=new Persona(data[i][0],data[i][1]);
};

const obtenerPersona = (id,cb)=>{
    if (personas[id]== undefined){
        cb('No se ha encontrado la persona');
    } else {
        cb(null,personas[id],id);
    }
}

const obtenerInstagram = (id,cb)=>{
    if (personas[id].ig== undefined) cb('No se ha encontrado el instagram');
    else cb(null,personas[id].ig);
}

obtenerPersona(3,(err,persona,id)=>{
    if (err) console.log(err);
    else {
        console.log(persona);
        obtenerInstagram(id,(err,instagram)=>{
            if (err) console.log(err);
            else console.log(instagram);
        });
    }
});
