class Celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.resolucionPantalla=rdp;
        this.resolucionCamara=rdc;
        this.memoriaRam=ram;
        this.encendido=false;
    };
    prender(){
        if (this.encendido==false){
            alert('celular prendido');
            this.encendido=true
        }
        else {
            alert('celular apagado')
            this.encendido=false
        };
    };
    apagar(){
        if (this.encendido==true){
            alert('celular apagado');
            this.encendido=false
        }
        else {
            alert('El celular ya esta apagado')
        };
    };
    reiniciar(){
        if (this.encendido==true){
            alert('Reiniciando celular');
            this.encendido=true
        }
        else {
            alert('El celular esta apagado')
        };
    };
    tomarFotos(){
        alert(`Foto tomada con una resolucion de ${this.resolucionCamara}`)
    };
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionCamara}`)
    };
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de Pantalla: <b>${this.resolucionPantalla}</b><br>
        Resolucion De Camara: <b>${this.resolucionCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `
    };
};

class CelularAltaGama extends Celular {
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionCamaraExtra=rdce;
    };
    grabarVideoLento(){
        alert('Estas graband en super Slow motion');
    };
    reconocimientofacial(){
        alert('Vamos a iniciar un reconocimiento facial');
    };
    infoAltagama(){
        return this.mostrarInfo() + `Resolucion de camara extra: <b>${this.resolucionCamaraExtra}</b><br >`
    }
};

const celular1= new CelularAltaGama("negro",'133g',"5.4'",'4K','4GB','Full HD')
const celular2= new CelularAltaGama("azul",'135g',"5.6'",'4K','3GB','Full HD')
const celular3= new CelularAltaGama("rojo",'137',"5.5'",'full hd','4GB','HD')




// const celular1= new Celular("negro",'165g',"5.2'",'full hd','2GB')
// const celular2= new Celular("azul",'150g',"5'",'hd','1GB')
// const celular3= new Celular("rojo",'160g',"5.1'",'full hd','2GB')


document.write(`
El celular 1 tiene:<br> ${celular1.infoAltagama()}<br>
El celular 2 tiene:<br> ${celular2.infoAltagama()}<br>
El celular 3 tiene:<br> ${celular3.infoAltagama()}<br>
`);

// celular1.prender();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.apagar();