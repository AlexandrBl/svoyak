const addButton = document.querySelector('.add-button');
const myButton = document.querySelector('.my-button');

const addForm = document.querySelector('.add-product');
const productContainer = document.querySelector('.product-container');

if (myButton) {
  myButton.addEventListener('click', async (event) => {
    
    event.preventDefault();

    const resMyCard = await fetch('/api/user/card');

    const data = await resMyCard.json();

    addForm.innerHTML = '';
    productContainer.insertAdjacentHTML('beforeend', data);

    myButton.setAttribute('disabled', '');
    addButton.removeAttribute('disabled');
  });
}

if (addButton) {
  addButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const resAddForm = await fetch('/api/user/addForm');

    const data = await resAddForm.json();

    productContainer.innerHTML = '';
    addForm.insertAdjacentHTML('beforeend', data);

    addButton.setAttribute('disabled', '');
    myButton.removeAttribute('disabled');
  });
}
