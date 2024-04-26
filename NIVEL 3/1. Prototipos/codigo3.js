
//# sobreescribiendo un prototipo y un metodo

class Objeto {
    constructor(){};
    hablar(){
        console.log('hola');
    };
};

const objeto = new Objeto();

//modificando un metodo
objeto.__proto__.hablar = ()=>{
    console.log('modificado afuera');
}

objeto.hablar()

//heredando un  metodo

let arr = [];

arr.__proto__ = objeto;

arr.hablar()

//heredando un  metodo de adentro 

let arr2 = [];

arr2.__proto__ = objeto.__proto__;

arr2.hablar()