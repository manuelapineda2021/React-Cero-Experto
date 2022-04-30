const persona = {

    nombre: "Manuela",
    apellidos: "Pineda Espinal",
    edad: 22,
    direccion: {
        cuidad: "Medellín",
        zip: 1641,
        lat: 6565,
        lng: 454896
    }
}

console.log(persona); //Imprime objeto completo
console.log(persona.apellidos); //Imprime valor de la propiedad del objeto

//Clonar un objeto dentro de un nuevo objeto
const persona2 ={...persona}
console.log(persona2);