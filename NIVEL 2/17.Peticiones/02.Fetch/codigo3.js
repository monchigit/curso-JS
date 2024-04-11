
//#blob

const imagen = document.querySelector('.img');

request = fetch('https://imgs.search.brave.com/RM0bVj3h_CsQJfjUgDacXbiptMH2yKSq_jVA7mg2RDI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM5/MDgyNDE4L2VzL2Zv/dG8vbGEtZ3Jhbi1p/bWFnZW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUhMYmRW/MnQyLW9ZNHlPd0lz/UHFpQkhVT0pFSEpa/UTN0dGM5Uy1uTHp6/OWM9');

request
    .then(res=>res.blob())
    .then(res=>imagen.src = URL.createObjectURL(res));