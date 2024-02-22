const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { generateTokens } = require('../../utils/authUtils');
const cookieConfig = require('../../config/cookiesConfig');

router.post('/reg', async (req, res) => {
  const {
    name, email, password, city,
  } = req.body;

  if (name && email && password && city) {
    let user = await User.findOne({ where: { email } });

    if (!user) {
      const hash = await bcrypt.hash(password, 10);

      user = await User.create({
        name, email, password: hash,
      });

      const { accessToken, refreshToken } = generateTokens(
        { user: { name: user.name, id: user.id } },
      );

      res.cookie(
        cookieConfig.access,
        accessToken,
        { maxAge: cookieConfig.maxAgeAccess, httpOnly: cookieConfig.httpOnly },
      );

      res.cookie(
        cookieConfig.refresh,
        refreshToken,
        { maxAge: cookieConfig.maxAgeRefresh, httpOnly: cookieConfig.httpOnly },
      );

      res.status(201).json({ message: 'ok' });
    } else {
      res.status(200).json({ message: 'Такой пользователь уже существует' });
    }
  } else {
    res.status(200).json({ message: 'Заполните все поля' });
  }
});

router.post('/log', async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      if (isSame) {
        const { accessToken, refreshToken } = generateTokens(
          { user: { name: user.name, id: user.id } },
        );

        res.cookie(
          cookieConfig.access,
          accessToken,
          { maxAge: cookieConfig.maxAgeAccess, httpOnly: cookieConfig.httpOnly },
        );

        res.cookie(
          cookieConfig.refresh,
          refreshToken,
          { maxAge: cookieConfig.maxAgeRefresh, httpOnly: cookieConfig.httpOnly },
        );

        res.status(201).json({ message: 'ok' });
      }
    } else {
      res.json({ message: 'Не существет такого пользователя или введен неверный пароль' });
    }
  } else {
    res.json({ message: 'Заполните все поля' });
  }
});

router.get('/out', async (req, res) => {
  res
    .clearCookie(cookieConfig.access)
    .clearCookie(cookieConfig.refresh);
  res.status(200).json({ message: 'ok' });
});

module.exports = router;
