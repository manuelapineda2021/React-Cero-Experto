// Desestructuración o asignación desustructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//Primera forma
const {nombre, edad, clave} = persona; //no necesariamente se deben llamar en orden

console.log(nombre);
console.log(edad);
console.log(clave);

//Segunda forma
const retornarPersona = ({clave, nombre, edad, rango = 'Capitán'}) =>{

    // console.log(nombre, rango, edad);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 1654,
            lng: -154.2654
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = retornarPersona (persona);
console.log(nombreClave, anios, lat, lng);