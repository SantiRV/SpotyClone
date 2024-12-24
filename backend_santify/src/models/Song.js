const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Song = sequelize.define('Song', {
    title: { type: DataTypes.STRING, allowNull: false },
    album: DataTypes.STRING,
    genre: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    url: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

module.exports = Song;
