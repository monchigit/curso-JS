
// introduccion a POO
class animal {
    constructor(especie,edad,color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info= `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    // # si se crea una funcion dentro de una clase, se le dice metodo
    // no se pueden usar funcionnes flecha para crear metodos
    verInfo() {
        document.write(this.info + '<br>')
    };
}; 

const perro = new animal ("perro",5,'rojo');
const gato = new animal ("gato",3,'negro');
const pajaro = new animal ("pajaro",2,'azul');

// document.write(perro.info + '<br>' )
// document.write(gato.info + '<br>')
// document.write(pajaro.info + '<br>')

// * usando el metodo 
perro.verInfo();