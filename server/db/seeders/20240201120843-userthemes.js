/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('UserThemes', [
      {
        user_id: 1,
        theme_id: 1,
        score: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        theme_id: 2,
        score: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        theme_id: 1,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        theme_id: 2,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        theme_id: 1,
        score: 998,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        theme_id: 2,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserThemes', null, {});
  },
};
