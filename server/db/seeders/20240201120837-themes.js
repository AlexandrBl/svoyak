/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        name: 'Собеседование в Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'География',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
