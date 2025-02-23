'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Terms', [
      {
        name: 'WebAssembly',
        description: 'Язык программирования низкого уровня, призванный внести программируемость туда, где нужны кроссплатформенность, эффективность и безопасность, в первую очередь на клиентскую сторону Всемирной паутины.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Terms', null, {});
  }
};
