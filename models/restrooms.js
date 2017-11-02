var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');
module.exports = function (sequelize, DataTypes) {
  var restroom = sequelize.define('restroom', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    // latitude: {
    //   type: Sequelize.DECIMAL
    // },
    // longitude: {
    //   type: Sequelize.DECIMAL
    // },
    location: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.INTEGER
    },
    comments: {
      type: Sequelize.TEXT
    },
    timestamps: false
  });
  restroom.sync();
};
