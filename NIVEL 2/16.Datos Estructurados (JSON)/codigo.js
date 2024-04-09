
//# objeto JSON 

// deserializado, cuando no esta como cadena de texto 
const objeto = {
    'variable1':'pedro',
    'variable2':'jorge'
};

// serializado, cuando esta como cadena de texto, se usa para envio de datos
const objeto2 = "{'variable1':'pedro','variable2':'jorge'}";

//# stringify, metodo para serializar 
const objetoSerializado=JSON.stringify(objeto);

//# stringify, metodo para deserializar 
const objetoDeserializado=JSON.parse(objetoSerializado);

console.log(objetoDeserializado);