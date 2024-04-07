let cantidad = prompt('Ingresa la cantidad de alumnos');
let alumnosTotales = [];

for (i = 0; i<cantidad; i++) {
    // ingresar datos en un array
    alumnosTotales[i]= [prompt(`ingrese el nombre del alumno ${i+1}`),0];
};

const tomarAsistencia = (nombre,p) => {
    let presencia = prompt(`Indique si ${nombre} esta presente (p) o ausente (a)`);
    if (presencia == 'p' || presencia == 'P') {
        alumnosTotales[p][1]++;
    };
};

for (i=0; i<30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    };
};

for (alumno in alumnosTotales) {
    resultado= `${alumnosTotales[alumno][0]}: <br>
    ________Asistencias:<b>${alumnosTotales[alumno][1]}<\b><br>
    ________Inasistencias:<b>${30-alumnosTotales[alumno][1]}<\b><br>`
    if (30-alumnosTotales[alumno][1] >3 ) {
        resultado+= 'REPROBADO POR INASISTENCIAS<br><br>';
    }
    else {
        resultado+='<br></br>'
    };
    document.write(resultado)
};
