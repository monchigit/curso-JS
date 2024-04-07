
const sendButton = document.getElementById('snd-btn');
const modal = document.querySelector('.modal-background');

sendButton.addEventListener('click',()=>{
    let resultado,mensaje;
    try {
        prevRes=parseInt(document.getElementById('nota').value);
        mensaje= 'Hola';
        if (isNaN(prevRes)){
            throw error
        }
        resultado=verificarAprobacion(8,8,prevRes);
        mensaje=definirMensaje(resultado[1]);
    } catch (error) {
        resultado = 'Error en los Datos';
        mensaje = 'Debe ingresar numeros enteros entre 0 y 10';
    }
    abrirModal(resultado[0],mensaje);
});

const abrirModal = (res,msg)=> {
    document.querySelector('.resultado').innerHTML = res;
    document.querySelector('.mensaje').innerHTML = msg;
    modal.style.display= 'flex'
    modal.style.animation = 'aparecer 1s forwards'
}

const definirMensaje = (num)=>{
    let resultado;
    switch (num) {
        case 1:
            resultado = 'super burro hp'
            break;
        case 2:
            resultado = 'super burro'
            break;
        case 3:
            resultado = 'burrisimo'
            break;
        case 4:
            resultado = 'burro'
            break;
        case 5:
            resultado = 'medio burro'
            break;
        case 6:
            resultado = 'no pasaste por burro'
            break;
        case 7:
            resultado = 'pasaste, te salvaste burro'
            break;
        case 8:
            resultado = 'bien hecho, no eres burro'
            break;
        case 9:
            resultado = 'bien te felicito'
            break;
        case 10:
            resultado = 'eres un gran crack'
            break;
    
        default:
            resultado=null
            break;
    }
    return resultado
}

const verificarAprobacion = (nota1,nota2,prevRes)=> {
    let prom = Math.round((nota1+nota2+prevRes)/3)
    if (prom>=7){
        return ["<span class='green'>APROBADO<span>",prom];
    }
    return ["<span class='red'>DESAPROBADO<span>",prom];
}