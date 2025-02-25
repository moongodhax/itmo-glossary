'use strict';

const relations = [
  { first: 1, second: 2, relation: 'Проводится с помощью' },
  { first: 1, second: 3, relation: 'Проводится в' },
  { first: 1, second: 4, relation: 'Проводится на' },
  { first: 1, second: 5, relation: 'Тестирует' },
  { first: 1, second: 10, relation: 'Тестирует' },
  { first: 11, second: 6, relation: 'Компилирует' },
  { first: 11, second: 10, relation: 'Компилирует' },
  { first: 11, second: 12, relation: 'Компилирует' },
  { first: 10, second: 7, relation: 'Реализует' },
  { first: 10, second: 8, relation: 'Реализует' },
  { first: 5, second: 7, relation: 'Реализует' },
  { first: 5, second: 8, relation: 'Реализует' },
  { first: 9, second: 5, relation: 'Исполняет' },
  { first: 9, second: 10, relation: 'Исполняет' },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Relations', relations.map((rel) => (
      {
        firstTermId: rel.first,
        secondTermId: rel.second,
        relationType: rel.relation,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    )));
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Relations', null, {});
  }
};
