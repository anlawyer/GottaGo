var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var restroom = sequelize.define('restroom', {
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
    type: Sequelize.STRING
  },
  timestamps: false
});

restroom.sync();

module.exports = restroom;
