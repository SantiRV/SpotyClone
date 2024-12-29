const express = require('express');
const { Song } = require('../models/Song'); // Importar el modelo Song
const router = express.Router();

// Obtener todas las canciones
router.get('/', async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener canciones' });
    }
});

// Crear una nueva canción
router.post('/', async (req, res) => {
    try {
        const { title, artistId, album, duration } = req.body;
        const newSong = await Song.create({ title, artistId, album, duration });
        res.status(201).json(newSong);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la canción' });
    }
});

module.exports = router;
