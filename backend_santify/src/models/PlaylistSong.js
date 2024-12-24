const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlaylistSong = sequelize.define('PlaylistSong', {}, { timestamps: false });

module.exports = PlaylistSong;
