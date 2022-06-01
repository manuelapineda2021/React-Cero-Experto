import React, { Fragment } from "react";

const PrimerApp = () =>{

    const saludo = "Hola mundo";
    // const objeto = {
        // nombre: "manuela",
        // edad: 22
    // }
    return (

        <Fragment>

            <h1>{saludo}</h1>
            <p>Mi primera aplicación</p>
            {/* <pre>Esto es un objeto  { JSON.stringify(objeto)}</pre> */}

        </Fragment>
        
    );
}

export default PrimerApp;