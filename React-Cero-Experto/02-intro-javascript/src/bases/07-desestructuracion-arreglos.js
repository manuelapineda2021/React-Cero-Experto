//Primera forma
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);

//Segunda forma
const retornarArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

// Tarea:
// 1. El primer valor del arreglo se llamarĂ¡ nombre
// 2. El segundo se llamarĂ¡ setNombre

const tareaRealizar = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = tareaRealizar('Goku');
console.log(nombre);
setNombre();
