'use strict';

//# file reader con Drag & Drop

const zona = document.querySelector('.zona-arrastre');

zona.addEventListener('dragover',e=>{
    e.preventDefault();
    changeStyle(e.target,'#222');
})

zona.addEventListener('dragleave',e=>{
    e.preventDefault();
    changeStyle(e.target,'#999');
})

zona.addEventListener('drop',e=>{
    e.preventDefault();
    changeStyle(e.target,'#999');
    cargarArchivo(e.dataTransfer.files[0])
    zona.style.border = '4px solid #888'
})

const changeStyle = (obj,color) =>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

//#para cargar imagenes

// const cargarArchivo = ar =>{
//     const reader = new FileReader();
//     reader.readAsDataURL(ar);
//     reader.addEventListener('load', () => {
//         let url = URL.createObjectURL(ar);
//         let img = document.createElement('img');
//         img.setAttribute('src',url);
//         document.querySelector('.resultado').appendChild(img);
//     })
// }

//# para cargar videos

const cargarArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener('progress',e=>{
        let carga = Math.round( e.loaded *100 / ar.size)
        zona.textContent = `${carga}%`;
        document.querySelector('.barra-carga').style.width = `${carga}%`
        document.querySelector('.barra-carga').style.padding = '75px 20px'
    })
    reader.addEventListener('loadend',e=>{
        changeStyle(zona,'#4cb')
        document.querySelector('.barra-carga').style.background = '#4f9'
    })
    reader.addEventListener('load', e => {
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:'video/mp4'})
        let url = URL.createObjectURL(video);
        let mp4 = document.createElement('video');
        mp4.setAttribute('src',url);
        document.querySelector('.resultado').appendChild(mp4);
        mp4.play();
    })
}