const express = require('express'); 
const prendaSchema = require('../models/prendas');
const router = express.Router();

//Creando prenda
router.post('/prendas', (req, res) => {
    const prenda = prendaSchema(req.body);
    prenda
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    });


    //Obtener todas las prendas
router.get('/prendas', (req, res) => {
    prendaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    });



//Encontrar una prenda
router.get('/prendas/:id', (req, res) => {
    const { id } = req.params;
    prendaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
    });

    //actualizar prenda
    router.put('/prendas/:id', (req, res) => {
        const { id } = req.params;
        const { titulo, descripcion, municipio} = req.body;
        prendaSchema
        .updateOne({_id: id}, { $set : {titulo,descripcion,municipio}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
        });


    //Borrar prenda
    router.delete('/prendas/:id', (req, res) => {
        const { id } = req.params;
        prendaSchema
        .remove({_id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
        });
        
module.exports = router;