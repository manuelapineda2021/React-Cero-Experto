// import {heroes} from '../data/heroes'; //importación individual
// import heroes from '../data/heroes'; //importación por defecto
import heroes, {owners} from '../data/heroes'; //importanción por defecto e importación individual (juntas)

// console.log(heroes);
// console.log(owners);

export const getHeroeById = (id) =>{
    return heroes.find(heroe => heroe.id === id);
}

// console.log(getHeroeById(4));

export const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner===owner);
// console.log(getHeroeByOwner ('DC'));

// El método .find ejecuta la función callback (valor del argumneto, índice del elemento, el objeto array que esta siendo recorrido) una vez por cada indice
// Hasta que encuentre uno en el que el callback devuelva un valor verdadero\watch