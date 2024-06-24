'use strict';

//# abrir o creae una base de datos con indexedDB

const IDBRequest = indexedDB.open('daltobase',1);

// agregando un object store, solo se puede hacer en el evento ugradeneeded

IDBRequest.addEventListener('upgradeneeded',()=>{
    const db = IDBRequest.result;
    db.createObjectStore('nombres',{
        autoIncrement: true
    });
})

IDBRequest.addEventListener('success',()=>{
    console.log('Todo salió correcctamente');
})

IDBRequest.addEventListener('error',()=>{
    console.log('Ocurrió un error al abrir la base de datos');
})

const getIDBData = (mode,msg) =>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction('nombres',mode);
    const objectStore = IDBtransaction.objectStore('nombres');
    IDBtransaction.addEventListener('complete',()=>{
        console.log(msg);
    })
    return objectStore;
}

//# primera operación del CRUD, crear objetos

const addObjeto = objeto =>{
    const IDBData = getIDBData('readwrite','objeto agregado correctamente');
    IDBData.add(objeto);
}

//# leer objetos

const leerObjetos = () =>{
    const IDBData = getIDBData('readonly');
    const cursor = IDBData.openCursor();
    cursor.addEventListener('success',()=>{
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log('Todos los datos fueron leidos');
    })
}

//# modificar objetos

const modificarObjeto = (key,objeto) =>{
    const IDBData = getIDBData('readwrite','objeto modificado correctamente');
    IDBData.put(objeto,key);
}

//# eliminar objetos

const eliminarObjeto = key =>{
    const IDBData = getIDBData('readwrite','objeto eliminado correctamente');
    IDBData.delete(key);
}
