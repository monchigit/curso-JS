let materias = {
    fisica: [82,5,3,'fisica'],
    logica:[92,7,4,'logica'],
    matematica: [90,6,3,'matematica'],
    algebra: [91,7,3,'algebra'],
    quimica: [70,6,2,'quimica'],
    programacion: [95,9,4,'programacion']
};

const aprobo =()=> {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let nota = materias[materia][1];
        let trabajos = materias[materia][2];
        console.group(`${materias[materia][3]}`)
        if (asistencias >= 90 && nota>=7 && trabajos>=3) {
            console.log('%c Aprobado','color:green')
            console.groupEnd()
        }
        else {
            console.log('%c Reprobado','color:red')
            console.groupEnd()
        };
    };
};

aprobo();