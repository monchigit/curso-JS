'use strict';

if (!('Notification' in window)) {
    console.log('las notificaciones no estan disponibles en tu navegador');
}

Notification.requestPermission(()=>{
    if (Notification.permission == 'granted') {
        new Notification('Suscribete')
    }
})

//curso js v1.7