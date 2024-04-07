
const name = document.querySelector(".name");
const subject = document.querySelector('.subject');
const email = document.querySelector('.email');
const btn = document.querySelector('.btn')
const resultado = document.querySelector('.resultado')

name.required=" ";

subject.required=" ";

email.required=' '

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let error = verifyFields();
    if (error[0]) {
        resultado.innerHTML=error[1];
        resultado.classList.add('red')
    } 
    else {
        resultado.innerHTML = 'Your request was send successfully'
        resultado.classList.add('green')
        resultado.classList.remove('red')
    };
});

const verifyFields= ()=>{
    let error = [];
    if (name.value.length <5 ||name.value.length >= 30) {
        error[0]=true;
        error[1]='El nombre es inválido';
        return error;
    } else if (email.value.length < 6 || email.value.length >40 || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1 || email.value.endsWith('.')) {
        error[0]=true;
        error[1]='El mail es inválido';
        return error;
    } else if (subject.value.length < 3 || subject.value.length>20 ) {
        error[0]=true;
        error[1]='La materia no existe';
        return error;
    };
    error[0]=false;
    return error;

}