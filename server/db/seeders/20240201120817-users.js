/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hash = await bcrypt.hash('admin', 10);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'Admin',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
