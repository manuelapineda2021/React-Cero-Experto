//ESQUEMA DE USUARIO
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema); // exportando esquema de datos de un usuario

