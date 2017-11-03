'use strict';

var rows = [
  {
    name: 'Starbucks',
    location: 'Ashby and Telegraph',
    category: '1',
    comments: 'Only moderately gross'
  }
];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('restroom', rows, {});
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('restroom', null, {});
  }
};
