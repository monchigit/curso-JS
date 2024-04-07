class App {
    constructor(peso,descargas,puntuacion) {
        this.peso=peso;
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.instalada=false
        this.iniciada=false
    };
    instalar(){
        if (this.instalada==false) {
            alert('La aplicacion se instalo correctamente');
            this.instalada=true;
        }
        else {
            alert('La aplicacion ya ha sido instalada previamente');
        }
    };
    desinstalar(){
        if (this.instalada==true) {
            alert('La aplicacion se desinstalo correctamente');
            this.instalada=false;
        }
        else {
            alert('La aplicacion ya ha sido desinstalada previamente');
        };
    };
    abrir(){
        if (this.iniciada==false && this.instalada==true) {
            alert('Aplicacion iniciada');
            this.iniciada=true;
        }
        else {
            alert('La aplicacion ya ha sido iniciada')
        };
    };
    cerrar(){
        if (this.iniciada==true && this.instalada==true) {
            alert('Aplicacion cerrada');
            this.iniciada=false;
        }
        else {
            alert('La aplicacion ya ha sido cerrada')
        };
    };
    infoApp(){
        return `
        Peso: <b>${this.peso}</b><br>
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        `
    }
};

const app1 = new App('2GB','500k','4.5 estrellas')

// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();

document.write(`
App 1:<br>${app1.infoApp()}
`);