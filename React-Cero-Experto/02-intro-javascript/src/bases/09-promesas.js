import {getHeroeById} from './bases/08-import-export';
// const promesa = new Promise((resolve, reject) =>{

//     //Función propia de Javascript que permite ejecutar una tarea en cierto tiempo y recibe un callback
//     setTimeout(()=>{

//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject ('No se pudo encontrar los heroes');

//     }, 2000) //cantidad milisegundos para ejecutar el callback

// });

// //Método catch = dio un error en la promesa
// //Método then = ejecuto promesa correctamente
// //Método finally = se ejecuta después del then o catch. Es lo único que se ejecuta

// promesa.then((heroes)=>{
//     console.log('Heroes:', heroes);
// }).catch(error => console.log(error));

// ----------------------------------------------------------------------
const getHeroeByIdAsync = (id) =>{

    return new Promise((resolve, reject) =>{

            setTimeout(()=>{
        
                const heroe = getHeroeById(id);

                if(heroe === undefined){
                    reject('No se pudo encontrar el heroe');
                }else{
                    resolve(heroe);
                }

            }, 2000) 
        });
}

getHeroeByIdAsync(2).then((heroe) =>{

    console.log('El heroe es:', heroe);
}).catch(error => console.log(error));