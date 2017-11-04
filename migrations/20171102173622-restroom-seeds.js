'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('restroom',
      [{
        name: 'Starbucks',
        location: 'Ashby and Telegraph',
        category: '1',
        comments: 'Only moderately gross',
        createdAt: '2017-11-02',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Ohlone Park',
        location: 'Hearst Ave.',
        category: '3',
        comments: 'scary at night',
        createdAt: '2017-11-02',
        updatedAt: '2017-11-02'
      },
      {
        name: 'Claremont Library',
        location: 'Benvenue and Ashby',
        category: '2',
        comments: 'Hard to find',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Safeway',
        location: 'College and Claremont',
        category: '2',
        comments: 'Super gross - only use in an emergency',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Terra Mia Coffee',
        location: '20th and Braodway',
        category: '1',
        comments: 'Hard to find',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Chevron',
        location: 'Shattuck and Ashby',
        category: '0',
        comments: '',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Mobil',
        location: 'MLK Way and 55th',
        category: '0',
        comments: 'Good snacks too',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      }], {});
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('restroom', null, {});
  }
};
