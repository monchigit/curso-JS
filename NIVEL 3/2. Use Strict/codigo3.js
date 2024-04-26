'use strict';

//# no se pueden usar palabras reservadas como nombres de variables

// let continue = 'borrando texto' //! no puede ser llamado como identificador en modo estricto, fuera de este modo si 

//# cambia el this a undefined

function saludar() {
    this.nombre='moises';
    this.saludar = function () {
        console.log(`Hola ${this.nombre}`);
    };
};

obj = saludar();

obj.saludar()