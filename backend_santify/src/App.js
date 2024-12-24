const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models'); // Importar Sequelize

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend funcionando 🚀');
});

const PORT = process.env.PORT || 5000;

// Conectar Sequelize y luego arrancar el servidor
sequelize.authenticate()
    .then(() => {
        console.log('Conexión con la base de datos establecida correctamente 🚀');
        
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('No se pudo conectar a la base de datos:', error);
    });
