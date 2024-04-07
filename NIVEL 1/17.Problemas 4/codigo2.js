cantidad=12

function asignarDatos() {
    let datos=[];
    for (let i=0; i<cantidad; i++) {
        let tuplaDatos=[];
        let materia = prompt('Ingrese el nombre de la materia');
        let profesor = prompt('Ingrese el nombre del profesor');
        let alumnos = [];
        while (0<1) {
            let estudiante = prompt('Ingrese el nombre del estudiante (para dejar de ingresar datos, escribir 0)');
            if (estudiante==0){
                break
            }
            else {
                alumnos.push(estudiante);
            };
        };
        tuplaDatos.push(materia,profesor,alumnos);
        datos.push(tuplaDatos);
    };
    return datos
};

let infoMaterias=asignarDatos();
let materia=prompt('ingresa la materia de la cual desea obtener los datos')

function verDatos(materia) {
    op=true
    for (let i=0; i<cantidad;i++) {
        if (infoMaterias[i][0]==materia){
            op=false
            document.write(`Materia: <b>${infoMaterias[i][0]}</b><br>Profesor Asignado: <b>${infoMaterias[i][1]}</b><br>Alumnos Inscritos:<br>`);
            for (nombres of infoMaterias[i][2]) {
                document.write(`${nombres}<br>`)
            };
        };
    };
    if (op==true) {
        document.write('<br>La materia no esta en el sistema<br>')
    }
};

verDatos(materia);

let nombre=prompt('Ingrese el nombre del alumno cuya información está buscando');

function clasesCofla(nombre) {
    let clases=[];
    for (i of infoMaterias){
        let datoscofla=[];
        if (i[2].includes(nombre)){
            datoscofla.push(i[0],i[1])
            clases.push(datoscofla)
        };
    };
    longitud=clases.length
    if (longitud==0){
        document.write('<br>Cofla no está inscrito en ninguna materia<br>')
    }
    else {
        document.write(`<br>Cofla esta en <b>${longitud}</b>clase/s:<br>`)
        for (let i=0;i<longitud;i++){
            document.write(`<b>${clases[i][0]}</b> con el profesor <b>${clases[i][1]}</b><br>`)
        };
    };
    
};

clasesCofla(nombre);