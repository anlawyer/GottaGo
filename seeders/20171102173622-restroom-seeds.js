'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('restroom',
      [{
        name: 'Starbucks',
        location: '3001 Telegraph Avenue, Berkeley',
        category: '1',
        comments: 'Only moderately gross',
        createdAt: '2017-11-02',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Ohlone Park',
        location: 'Ohlone Park, Milvia Street, Berkeley',
        category: '3',
        comments: 'scary at night',
        createdAt: '2017-11-02',
        updatedAt: '2017-11-02'
      },
      {
        name: 'Claremont Library',
        location: '2940 Benvenue Ave, Berkeley',
        category: '2',
        comments: 'Hard to find',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Safeway',
        location: '6310 College Ave, Oakland',
        category: '2',
        comments: 'Super gross - only use in an emergency',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Terra Mia Coffee',
        location: '2001 Broadway, Oakland',
        category: '1',
        comments: 'Hard to find',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Chevron',
        location: '2996 Shattuck Ave, Berkeley',
        category: '0',
        comments: '',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-03'
      },
      {
        name: 'Mobil',
        location: '5425 Martin Luther King Jr Way, Oakland',
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
