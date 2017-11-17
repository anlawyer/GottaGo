'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Maddy',
        email: 'mrhf008@gmail.com',
        password: 'kittens123',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-04'
      },
      {
        username: 'Pavel',
        email: 'beldrevo.by@gmail.com',
        password: 'puppies123',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-04'
      },
      {
        username: 'Alison',
        email: 'anlawyer@berkeley.edu',
        password: 'hedgehogs123',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-04'
      },
      {
        username: 'Danny',
        email: 'mr.dannyb@gmail.com',
        password: 'ducklings123',
        createdAt: '2017-11-03',
        updatedAt: '2017-11-04'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
