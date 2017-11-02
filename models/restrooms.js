module.exports = function (sequelize, DataTypes) {
  var restroom = sequelize.define('restroom', {
    name: {
      type: Sequelize.STRING
    },
    latitude: {
      type: Sequelize.INTEGER
    },
    longitude: {
      type: Sequelize.INTEGER
    },
    category: {
      type: Sequelize.INTEGER
    },
    comments: {
      type: Sequelize.STRING
    }
  })
}
