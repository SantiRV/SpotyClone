const express = require('express');
const { Artist } = require('../models/Artist'); // Importar el modelo Artist
const router = express.Router();

// Obtener todos los artistas
router.get('/', async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.json(artists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener artistas' });
    }
});

// Crear un nuevo artista
router.post('/', async (req, res) => {
    try {
        const { name, genre } = req.body;
        const newArtist = await Artist.create({ name, genre });
        res.status(201).json(newArtist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el artista' });
    }
});

module.exports = router;
