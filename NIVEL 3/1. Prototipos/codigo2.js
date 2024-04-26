//accediendo al prototipo con getprototypeof

let variable = [];
console.log(Object.getPrototypeOf(variable));

class Objeto {
    constructor(){};
    hablar(){
        console.log('hola');
    };
};

const objeto = new Objeto();

console.log(objeto);