
let fisica=[];
let quimica=[];
let programacion=[];
let matematica=[];
let materias=[fisica,quimica,programacion,matematica];

function inscribirMateria(nombre,materia) {
    if (materia=='fisica')
        if (fisica.length<=19) {
            fisica.push(nombre);
            document.write(`<br>Felicidades ${nombre} fuiste inscrito en ${materia}<br>`)
        }
        else {
            document.write(`<br>La lista de clases esta llena ${nombre}, no se puede proceder con la inscripción<br>`)
        }
    else if (materia=='quimica')
        if (quimica.length<=19) {
            quimica.push(nombre);
            document.write(`<br>Felicidades ${nombre} fuiste inscrito en ${materia}<br>`)
        }
        else {
            document.write(`<br>La lista de clases esta llena ${nombre}, no se puede proceder con la inscripción<br>`)
        }
    else if (materia=='programacion')
        if (programacion.length<=19) {
            programacion.push(nombre);
            document.write(`<br>Felicidades ${nombre} fuiste inscrito en ${materia}<br>`)
        }
        else {
            document.write(`<br>La lista de clases esta llena ${nombre}, no se puede proceder con la inscripción<br>`)
        }
    else if (materia=='matematica')
        if (matematica.length<=19) {
            matematica.push(nombre);
            document.write(`<br>Felicidades ${nombre} fuiste inscrito en ${materia}<br>`)
        }
        else {
            document.write(`<br>La lista de clases esta llena ${nombre}, no se puede proceder con la inscripción<br>`)
        }
    else {
        document.write('<br>La materia no está en el sistema<br>')
    };
};