const sequelize = require('../config/database');
const User = require('./User');
const Artist = require('./Artist');
const Song = require('./Song');
const Playlist = require('./Playlist');
const PlaylistSong = require('./PlaylistSong');

// Relaciones
Artist.hasMany(Song, { foreignKey: 'artistId' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

User.hasMany(Playlist, { foreignKey: 'userId' });
Playlist.belongsTo(User, { foreignKey: 'userId' });

Playlist.belongsToMany(Song, { through: PlaylistSong, foreignKey: 'playlistId' });
Song.belongsToMany(Playlist, { through: PlaylistSong, foreignKey: 'songId' });

module.exports = { sequelize, User, Artist, Song, Playlist, PlaylistSong };
