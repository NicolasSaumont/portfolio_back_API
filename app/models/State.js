const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class State extends Model {}

State.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "state",
});

module.exports = State;