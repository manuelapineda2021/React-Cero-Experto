//CÓDIGO DEL SERVIDOR
const express = require('express'); //optener express en una variable
const mongoose = require('mongoose'); //permite conexión a mongo
require('dotenv').config(); //ejecutar .env
const userRoutes = require("./routes/user"); //importar rutas usuario


const app = express(); //asigno el objeto de la aplicación aun variable
const port = process.env.PORT || 9000; //varaible de ambiente propia de nodejs

//middleware
app.use(express.json()); //transformar json a objeto javascript
app.use('/api', userRoutes);



//routes
app.get('/', (request, response)=>{
  response.send("Welcome to my API");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, ()=> console.log("Server listening on port", port));