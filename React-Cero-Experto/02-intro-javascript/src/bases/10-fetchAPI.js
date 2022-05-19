const apiKey = "Zesd3jhgCGtuh3c7PJnmSgQKZT0ZajuG";

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json())
    .then(({data}) => {

        const {url} = data.images.original
        const img = document.createElement('img');
        img.src= url;

        //mostrar img en el HTML
        document.body.append(img);

    })
    .catch(console.warn)