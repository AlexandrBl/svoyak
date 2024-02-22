const router = require('express').Router();
const { Question, Theme } = require('../../db/models');

// router.get('/', async (req, res) => {
//   const questions = await Question.findAll();
//   res.json({ questions });
// });
// module.exports = router;

router.get('/', async (req, res) => {
  const themes = await Theme.findAll({ include: { model: Question } });
  res.json({ themes });
});
module.exports = router;
