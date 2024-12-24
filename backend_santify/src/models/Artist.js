const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artist = sequelize.define('Artist', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    genre: DataTypes.STRING,
    bio: DataTypes.TEXT,
    image_url: DataTypes.STRING,
}, { timestamps: true });

module.exports = Artist;
