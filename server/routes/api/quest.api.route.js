const router = require('express').Router();
const {
  Question, Theme, Answer, User,
} = require('../../db/models');

// router.get('/', async (req, res) => {
//   const questions = await Question.findAll();
//   res.json({ questions });
// });
// module.exports = router;

router.get('/', async (req, res) => {
  const themes = await Theme.findAll({ include: { model: Question, include: { model: Answer } } });
  res.json({ themes });
});
module.exports = router;

router.put('/', async (req, res) => {
  const { id, idAnswer } = req.body;
  const oneQuest = await Question.findOne({ include: { model: Answer }, where: { id } });
  const answer = oneQuest.Answers.find((el) => el.id === +idAnswer);
  const rightAnswer = oneQuest.Answers.find((el) => el.isRight === true);
  const user = await User.findOne({ where: { id: res.locals.user.id } });
  if (answer.isRight) {
    const score = user.score + oneQuest.salary;
    await user.update({ score });
    res.json({ message: 'ok', rightAnswer });
  } else {
    res.json({ message: 'ответ неверный!', rightAnswer });
  }
});
