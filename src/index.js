const express = require('express'); 
const mongoose = require('mongoose');
require ('dotenv').config();
const userRoutes = require('./routes/user');
const userRoutes2 = require('./routes/prendas');

const app = express();
const port = process.env.PORT || 9000;


//Middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', userRoutes2);

//Rutas
app.get('/', (req, res) => {
    res.send('Welcome to mi API :D');
});

//mongo db conexion
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MONGO DB ATLAS'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));