const mongoose = require('mongoose');

//Modelo de datos de una prenda
const prendaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required : true
    },
    municipio: {
        type: String,
        required: true
 }

});

module.exports = mongoose.model('Prendas' , prendaSchema);