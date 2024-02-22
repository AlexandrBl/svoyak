const addProductForm = document.querySelector('.add-product');
const productsList = document.querySelector('.product-list');

if (addProductForm) {
  addProductForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, img, price, condition } = event.target;
    const formData = new FormData();

    const picData = [...img.files];
    picData.forEach((url) => {
      formData.append('url', url);
    });
    formData.append('name', name.value);
    formData.append('price', price.value);
    formData.append('condition', condition.value);

    const res = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (data.message === 'ok') {
      const message = document.querySelector('.add-product__message');

      message.innerHTML = 'Товар добавлен';

      setTimeout(() => {
        message.innerHTML = '';
      }, 3000);
      event.target.reset();
    } else {
      document.querySelector('.add-product__message').innerHTML = data.message;
    }
  });
}
