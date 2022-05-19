//El await depende del async, pero el async no depende del await
//Para manejar errores con el async await es con TryCatch

const getImagen = async ()=>{

    try {

        const apiKey = "Zesd3jhgCGtuh3c7PJnmSgQKZT0ZajuG";
        const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
        console.log (url);
        const img = document.createElement('img');
        img.src= url;
    
        //Mostrar imagen en el HTML
        document.body.append(img);
      
        
    } catch (error) {
        //manejo del error
        console.error(error);
    }

}

getImagen();