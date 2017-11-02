'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('restroom', [{
      name: 'Starbucks',
      location: 'Ashby and Telegraph',
      category: '1',
      comments: 'Only moderately gross'
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('restroom', [{
      name: 'Starbucks'
    }]);
  }
};