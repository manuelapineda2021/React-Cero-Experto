import {heroes} from './data/heroes';
console.log(heroes);

const getHeroeById = (id) =>{
    return heroes.find(heroe => heroe.id === id);
}

console.log(getHeroeById(4));

const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner===owner);
console.log(getHeroeByOwner ('DC'));

// El método .find ejecuta la función callback (valor del argumneto, índice del elemento, el objeto array que esta siendo recorrido) una vez por cada indice
// Hasta que encuentre uno en el que el callback devuelva un valor verdadero