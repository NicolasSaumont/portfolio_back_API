const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Techno extends Model {}

Techno.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "techno",
});

module.exports = Techno;