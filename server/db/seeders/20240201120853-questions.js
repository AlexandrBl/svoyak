/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Questions', [
      {
        question_text: 'Для чего используется феч?',
        theme_id: 1,
        salary: 100,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Если дать программисту карандаш он нарисует ...',
        theme_id: 1,
        salary: 100,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Консоль ...',
        theme_id: 1,
        salary: 100,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Чтобы вовремя проснуться и не опоздать - вечером нужно поставить ...',
        theme_id: 1,
        salary: 100,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Что говорит ошибка, если не написать консоль лог',
        theme_id: 1,
        salary: 200,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Да здравствует Санкт-Петербург и это ...',
        theme_id: 1,
        salary: 200,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Валюта какой страны изображена на картинке',
        theme_id: 2,
        salary: 200,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Как бы назывался Эльбрус Буткемп, если бы он был открыт в Иране',
        theme_id: 2,
        salary: 200,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Где находится город Белорецк',
        theme_id: 2,
        salary: 200,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Чья цитата написана на стене в комнате cookies',
        theme_id: 2,
        salary: 200,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Ближайшая станция метро к московскому филиалу Эльбрус буткемп',
        theme_id: 2,
        salary: 300,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
