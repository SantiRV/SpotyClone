const express = require('express');
const { Playlist } = require('../models/Playlist'); // Importar el modelo Playlist
const router = express.Router();

// Obtener todas las listas de reproducción
router.get('/', async (req, res) => {
    try {
        const playlists = await Playlist.findAll();
        res.json(playlists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener listas de reproducción' });
    }
});

// Crear una nueva lista de reproducción
router.post('/', async (req, res) => {
    try {
        const { name, userId } = req.body;
        const newPlaylist = await Playlist.create({ name, userId });
        res.status(201).json(newPlaylist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la lista de reproducción' });
    }
});

module.exports = router;
