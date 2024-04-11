//*referencia
// fetch('info.txt')
//     .then(res=>res.json())
//     .then(res=>console.log(res));
//*referencia

//#axios 
//devuelve la información directamente en formato JSON, por defecto esta en GET
axios('info.txt')
    .then(res=>console.log(res));

//# POST con axios
    axios.post('https://reqres.in/api/users',{
        "nombre":"pedro",
        "edad": 24
    })
    .then(res=>console.log(res));

//# POST con axios,otra forma 
    axios('https://reqres.in/api/users',{
        method: 'post',
        data : {
            "nombre":"pedro",
            "edad": 24
        }
    })
    .then(res=>console.log(res));