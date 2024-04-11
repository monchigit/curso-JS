
//#POST con fetch

request = fetch('https://reqres.in/api/users',{
    method: 'POST',
    body : JSON.stringify({
        "nombre":"Moises",
        "apellido":"Sanchez"
    }),headers:{"content-type":"application/json"}
});

request
    .then(res=>res.json())
    .then(res=>console.log(res));