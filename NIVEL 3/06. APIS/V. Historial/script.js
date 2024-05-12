'use sctrict';

//# usando la api Historial 

console.log(history);

history.back() //va hacia atras

history.forward() //va hacia adelante

console.log(history.length) //tamaño del historial 

history.go(1) //va hacia el sitio indicado con el numero relativo, 0 -> recargar, -1 -> pagina anterior, 1 pagina siguiente

console.log(location.href);
//crea una nueva entrada en el historial, modifica la URL y conserva la info
//se modifica state con el parametro que le pasemos
history.pushState({nombre:'fulano'},'','?dqefeqfqdwq')

addEventListener('popstate',(e)=>{
    console.log(e.state);
})

//no queda registro en el historial
history.replaceState({nombre:'fulano'},'','?feqfqefqefqe')
