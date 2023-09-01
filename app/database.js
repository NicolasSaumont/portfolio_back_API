const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  logging: false, // Permet de ne pas avoir des req SQL dans la console
  define: {
    underscored: true, // Permet de convertir les noms de tables du camelCase au snake_case

    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
  },
});

module.exports = sequelize;
