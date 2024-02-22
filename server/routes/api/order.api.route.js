const router = require('express').Router();

const { Order, OrderItem, Product } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { productId } = req.body;
    if (!res.locals.user) {
      res.json({ message: 'Неудалось добавить товар' });
    } else if (productId) {
      let order = await Order.findOne({ where: { user_id: res.locals.user.id, status: 'Не оформлен' } });

      if (!order) {
        order = await Order.create({ status: 'Не оформлен', price: '0', user_id: res.locals.user.id });

        const product = await Product.findOne({ where: { id: productId } });

        const orderItem = await OrderItem.create({ product_id: productId, order_id: order.id });

        const price = +order.price + +product.price;

        await order.update({ price: `${price}` });

        res.json({ message: 'Товар добавлен в корзину', id: productId });
      } else {
        const product = await Product.findOne({ where: { id: productId } });

        const orderItem = await OrderItem.create({ product_id: productId, order_id: order.id });

        const price = +order.price + +product.price;

        order.update({ price: `${price}` });

        res.json({ message: 'Товар добавлен в корзину', id: productId });
      }
    }
  } catch ({ message }) {
    console.log(message);
    res.json({ message: 'Неудалось добавить товар' });
  }
});

module.exports = router;
