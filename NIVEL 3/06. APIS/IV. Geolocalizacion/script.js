'use sctrict';

//# usando la api geolocalizacion 

const geolocation = navigator.geolocation;

const posicion = (pos)=>{
    // se accede a los valores del objeto pos
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    console.log(pos);
}

const err = (e)=>console.log(e);

const options = {
    // tiempo en el que se va a actualizar la ubicacion guardada en cache
    maximumAge: 0,
    // tiempo que tardara en devolver la informacion
    timeout: 3000,
    // aprovecha todos los recursos para devolver la localizacion mas precisa
    enableHighAccuracy: true,
}

//para acceder a los datos, se le pasa una funcion como primer paraetro
//para manejar un error, se le pasa la segunda funcion parametro
//para trabajar con las opciones se le pasa el objeto options

geolocation.getCurrentPosition(posicion,err,options);
