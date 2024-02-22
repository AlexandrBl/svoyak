const productList = document.querySelector('.product-list');

if (productList) {
  productList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('item-card__add-button')) {
      const card = event.target.closest('.item-card');

      const productId = card.dataset.id;

      const resOrder = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          productId,
        }),
      });

      const data = await resOrder.json();
      const { id } = data;
      const orderMessage = document.querySelector(`.order-message[data-num="${id}"]`);

      if (data.message === 'Товар добавлен в корзину') {
        orderMessage.innerHTML = data.message;

        setTimeout(() => { orderMessage.innerHTML = ''; }, 3000);
      } else if (data.message === 'Не удалось добавить товар') {
        orderMessage.innerHTML = data.message;
        setTimeout(() => { orderMessage.innerHTML = ''; }, 3000);
      }
    }
  });
}
