const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const funcionFlecha = (nombre) =>{
    return `Hola nuevamente, ${nombre}`;
}

console.log(saludar('Manuela'));
console.log(funcionFlecha ('Manuela'))

// Tarea:
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo ('Manuela');
console.log(usuarioActivo);