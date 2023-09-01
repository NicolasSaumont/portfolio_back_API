const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Site extends Model {}

Site.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  site_link: {
    type: DataTypes.STRING,
    allowNull: true
  },
  github_link: {
    type: DataTypes.STRING,
    allowNull: true
  },
  top_site: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
}, {
  sequelize,
  tableName: "site",
});

module.exports = Site;