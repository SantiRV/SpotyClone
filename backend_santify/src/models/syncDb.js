const { sequelize } = require('./index');

const syncDb = async () => {
   try {
       await sequelize.sync({ force: true }); // ¡Cuidado! Esto borra y recrea tablas
       console.log('Base de datos sincronizada correctamente 🚀');
   } catch (error) {
       console.error('Error al sincronizar la base de datos:', error);
   } finally {
       sequelize.close();
   }
};

syncDb();
