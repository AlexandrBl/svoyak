const formFilter = document.querySelector('.filter-form');
const formSearch = document.querySelector('.search-form');

if (formFilter) {
  formFilter.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { city } = e.target;

    const res = await fetch(`/products/cities/${city.value}`, {
      method: 'GET',
    });
    const data = await res.json();
    if (data.message === 'ok') {
      document.querySelector('.product-list').innerHTML = data.html;
    }
  });
}

if (formSearch) {
  formSearch.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (!name.value) {
      // const res = await fetch('/products', {
      //   method: 'GET',
      // });
      // const data = await res.json();

      // document.querySelector('.product-list').innerHTML = data.html;
      window.location.assign('/products');
    } else {
      const res = await fetch(`/products/${name.value}`, {
        method: 'GET',
      });
      const data = await res.json();

      document.querySelector('.product-list').innerHTML = data.html;
    }
  });
}
