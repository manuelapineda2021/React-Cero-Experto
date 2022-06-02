const express = require('express');
const userSchema = require("../models/user");

const router = express.Router(); //enrutador, retorna un objeto

//ruta create user
router.post("/create_users", (request, response)=>{
    const user = userSchema(request.body); //usuario creado
    user.save().then((data) => response.json(data))
    .catch((error) => response.json({message: error}));
});

//ruta obtener user
router.get("/obtener_user", (request, response)=>{
    userSchema.find().then((data) => response.json(data))
    .catch((error) => response.json({message:error}));
});

//ruta obtener user específico 
router.get("/obtener_un_user/:id", (request, response)=>{
    const {id} = request.params; //extraer id de los parametros
    userSchema.findById(id).then((data) => response.json(data))
    .catch((error) => response.json({message:error}));
});

//ruta update user
router.put("/update_user/:id", (request, response)=>{
    const {id} = request.params; //extraer id de los parametros
    const {name, age, email} = request.body;
    userSchema
    .updateOne({ _id: id }, { $set: {name, age, email} }).then((data) => response.json(data))
    .catch((error) => response.json({message:error}));
});

//ruta delete user
router.delete("/delete_user/:id", (request, response)=>{
    const {id} = request.params; //extraer id de los parametros
    userSchema
    .remove({ _id: id }).then((data) => response.json(data))
    .catch((error) => response.json({message:error}));
});

module.exports = router; //exportar router