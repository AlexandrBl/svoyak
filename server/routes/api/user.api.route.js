const router = require('express').Router();
const ListProduct = require('../../Components/ListProduct');
const AddForm = require('../../Components/AddForm');

const { Product, User, City } = require('../../db/models');

router.get('/card', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: { model: User, include: { model: City } },
      where: { user_id: res.locals.user.id },
    });
    const html = res.renderComponent(ListProduct, { products });

    res.status(200).json(html);
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/addForm', async (req, res) => {
  const html = res.renderComponent(AddForm);

  res.status(200).json(html);
});

module.exports = router;
