// * caracteristicas de POO 

// herencia

class Animal {
    constructor(especie,edad,color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info= `soy ${this.especie}, tengo ${this,edad} años y soy de color ${this.color}`;
    };
    verInfo() {
        document.write(this.info + '<br>')
    };
}; 

class Perro extends Animal {
    constructor(especie,edad,color,raza) {
        super(especie,edad,color)
        this.raza = null
    };

    // # Metodos estáticos, sirve para iniciar un metodo sin haber definido al objeto
    static ladrar(){
        alert('Wow wow wow')
    };

    // # metodos setters, pueden modificar valores
    set setRaza(newName){
        this.raza=newName
    };

    // # metodos getters, para obtener informacion 
    get getRaza(){
        return this.raza
    }
};

// no puedo tener un objeto con el mismo nombre de una clase
const perro = new Perro ("perro",5,'rojo','pitbull');
const gato = new Animal ("gato",3,'negro');
const pajaro = new Animal ("pajaro",2,'azul');

// Perro.ladrar();
// gato.verInfo();
// pajaro.verInfo();

// * modificando un valor con un metodo setter
perro.setRaza= "doberman";
document.write(perro.raza+'<br>')
document.write(perro.getRaza)