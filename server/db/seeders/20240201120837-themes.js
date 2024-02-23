/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        name: 'Коктейли',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мемы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
