'use strict';

addEventListener('visibilitychange',e=>{
    if (e.target.visibilityState == 'visible') {
        document.write('no abandones la pagina bro')
    }
})