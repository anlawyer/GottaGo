'use strict';
module.exports = (sequelize, DataTypes) => {
  var restroom = sequelize.define('restroom', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    category: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    createdAt: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATEONLY
  }, {
    freezeTableName: true
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return restroom;
};
