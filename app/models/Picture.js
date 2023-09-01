const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Picture extends Model {}

Picture.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "picture",
});

module.exports = Picture;