/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Questions', [
      {
        question_text: 'Какой коктейль?',
        theme_id: 1,
        salary: 100,
        img_path: 'https://s2.wine.style/images_raw/pages/buzlu-su1599105892.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: ' Для чего Джеймс Бонд просил «взболтать, а не смешивать» (shaken, not stirred) свой любимый коктейль из водки с мартини?',
        theme_id: 1,
        salary: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Какая группа коктейлей не содержит содовую (газированную воду)?',
        theme_id: 1,
        salary: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: ' Где изобрели Aperol – ярко-оранжевый напиток на основе апельсина и трав, который стал популярен в составе аперитивных коктейлей-спритцев?',
        theme_id: 1,
        salary: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'В баре Нью-Йоркского отеля Algonquin подают мартини за $10 000, это один из самых дорогих коктейлей в мире. Что делает его особенным?',
        theme_id: 1,
        salary: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Какие тяги?',
        theme_id: 2,
        salary: 100,
        img_path: 'https://memepedia.ru/wp-content/uploads/2023/12/tjagi.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Из какого фильма/сериала этот мем с Педро Паскалем и Николасом Кейджем?',
        theme_id: 2,
        salary: 200,
        img_path: 'https://memepedia.ru/wp-content/uploads/2023/12/kejdzh.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Как Кен называет свой дом в фильме “Барби”?',
        theme_id: 2,
        salary: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Под какой трек гуляет Евгений Понасенков в знаменитом меме?',
        theme_id: 2,
        salary: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Про какой жанр музыки он говорит?',
        theme_id: 2,
        salary: 500,
        img_path: 'https://sun9-47.userapi.com/impg/vDchBXNXQo4TeaWUEcV-pSmeCCirEEtx8BlKbw/CX0Zl-hVrNA.jpg?size=600x450&quality=96&sign=1d663edb4a7b8ad41e235035ad250e2e&type=album',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Кто такой хайпер X?',
        theme_id: 3,
        salary: 100,
        img_path: 'https://s2.wine.style/images_raw/pages/buzlu-su1599105892.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Сколько сейчас студенток женского пола учится в нашем кампусе?',
        theme_id: 3,
        salary: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'Какая группа коктейлей не содержит содовую (газированную воду)?',
        theme_id: 3,
        salary: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: ' Где изобрели Aperol – ярко-оранжевый напиток на основе апельсина и трав, который стал популярен в составе аперитивных коктейлей-спритцев?',
        theme_id: 3,
        salary: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: 'В баре Нью-Йоркского отеля Algonquin подают мартини за $10 000, это один из самых дорогих коктейлей в мире. Что делает его особенным?',
        theme_id: 3,
        salary: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
