
//# Peticiones POST

let request;

if (window.XMLHttpRequest) request = new XMLHttpRequest;
else request = new ActiveXObject("Microsoft.XMLHTTP");


request.addEventListener('load', ()=>{
    let respuesta;
    if (request.status == 200 || request.status == 201) respuesta= request.response;
    else respuesta = 'Lo sentimos, no se ha encontrado el recurso';
    console.log(JSON.parse(respuesta));
})

request.open("POST","https://reqres.in/api/users");

request.setRequestHeader('content-type','application/json;charset=UTF-8')

request.send(JSON.stringify({
    "name": "morpheus",
"job": "leader"
}));