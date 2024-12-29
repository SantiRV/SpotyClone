const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models'); // Importar la conexión a la base de datos

const artistRoutes = require('./routes/artists');
const songRoutes = require('./routes/songs');
const playlistRoutes = require('./routes/playlists');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/api/artists', artistRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Backend funcionando 🚀');
});

const PORT = process.env.PORT || 5000;

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
