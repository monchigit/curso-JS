
//definimos el objeto alumnos de donde se sacaran los datos para llenar los contenedores 
let alumnos = [{
    nombre:'Moises Sanchez',
    email:'moisesanchezwork@gmail.com',
    materia:'Programación',
},{
    nombre:'Sofia Letonia',
    email:'letonia@gmail.com',
    materia:'Fisica',
},{
    nombre:'Jorge Rosas',
    email:'jorge@gmail.com',
    materia:'Matematica',
},{
    nombre:'Noyralih Coromoto',
    email:'coromoto@gmail.com',
    materia:'Logica',
},{
    nombre:'Fulano Sutano',
    email:'sutano@gmail.com',
    materia:'Algebra',
}];

//se definne una constante que almacene el div contenedor al que luego se le agregaran los elementos 
const contenedor =document.querySelector('.grid-container');
let htmlcode='';

// se crea un ciclo que recorra el objeto y almacene los datos necesarios en variables
for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos['nombre'];
    let email = datos['email'];
    let materia = datos['materia'];

    //se agrega el codigo html a la variable declarada con los datos requeridos
    htmlcode += `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="semana 2">Semana 2</option>
        </select>
    </div>`;
};

//se agrega el codigo html al contenedor 
contenedor.innerHTML = htmlcode

//se selecciona al boton 
const boton = document.querySelector('.btn-confirmar');

//se le agrega un evento al boton para confirmar los datos
boton.addEventListener('click',()=>{
    //se agrega una confirmacion del usuario
    let confirmar = confirm('Está seguro que quiere confirmar estos datos?');
    if (confirmar) {
        //se remueve el boton del documento
        document.body.removeChild(boton)
        //se almacena a todos los div contenedores de la semana seleccionada en un nodelist
        let elementos = document.querySelectorAll('.semana');
        console.log(elementos);
        //se almacena a todos los select dentro de los div contenedores en un nodelist
        let semanaElegida = document.querySelectorAll('.semana-elegida');
        console.log(semanaElegida)
        //se recorre el nodelist 1 y se le coloca el valor de la semana seleccionada
        for (elemento in elementos) {
            semana = elementos[elemento];
            console.log(semana);
            semana.innerHTML=semanaElegida[elemento].value;
        };
    };
}); 

