const router = require('express').Router();
const { Product, User, City } = require('../../db/models');
const fileupload = require('../../utils/fileUpload');
const ProductCard = require('../../Components/ProductCard');

router.post('/', async (req, res) => {
  try {
    const { name, price, condition } = req.body;

    const file = req.files.url;
    if (name && price && file && condition) {
      if (file.length) {
        const arrUrl = await Promise.all(
          file.map(async (el) => await fileupload(el)),
        );
      } else {
        const img = await fileupload(file);

        const product = await Product.create({
          name,
          price,
          img,
          condition,
          user_id: res.locals.user.id,
        });

        const { id } = product;

        const card = await Product.findOne({
          include: { model: User, include: { model: City } },
          where: { id },
        });
        const html = res.renderComponent(
          ProductCard,
          { product: card },
          { doctype: false },
        );

        res.json({ message: 'ok', html });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
