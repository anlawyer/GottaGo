'use strict';

var rows = [
  {
    name: 'Starbucks',
    location: 'Ashby and Telegraph',
    category: '1',
    comments: 'Only moderately gross'
  },
  {
    name: 'Ohlone Park',
    location: 'Hearst Ave.',
    category: '3',
    comments: 'scary at night'
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
