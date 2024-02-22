const regForm = document.querySelector('.reg-form');
const formMessage = document.querySelector('.message');

const logForm = document.querySelector('.log-form');

const logOutBtn = document.querySelector('.logOut-button');

const logButton = document.querySelector('.log-button');
const regButton = document.querySelector('.reg-button');

if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    formMessage.innerHTML = '';

    const {
      name, email, password, password2, city, method,
    } = event.target;

    if (password.value === password2.value) {
      const resReg = await fetch('/api/auth/reg', {
        method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
          city: city.value,
        }),
      });

      const data = await resReg.json();

      if (data.message === 'Такой пользователь уже существует') {
        formMessage.innerHTML = data.message;
      } else if (data.message === 'Заполните все поля') {
        formMessage.innerHTML = data.message;
      } else if (data.message === 'ok') {
        window.location.assign('/products');
      }
    } else {
      formMessage.innerHTML = 'Пароли не совпадают';
    }
  });
}

if (logForm) {
  logForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    formMessage.innerHTML = '';

    const { email, password, method } = event.target;

    const resLog = await fetch('/api/auth/log', {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await resLog.json();

    if (data.message === 'ok') {
      window.location.assign('/products');
    } else if (data.message === 'Заполните все поля') {
      formMessage.innerHTML = data.message;
    } else if (data.message === 'Не существет такого пользователя или введен неверный пароль') {
      formMessage.innerHTML = data.message;
    }
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', async () => {
    const resOut = await fetch('/api/auth/out');

    const data = await resOut.json();
    if (data.message === 'ok') {
      window.location.assign('/auth');
    }
  });
}

if (logButton) {
  logButton.addEventListener('click', async (event) => {
    event.preventDefault();

    formMessage.innerHTML = '';

    regForm.innerHTML = '';

    const resForm = await fetch('/auth/log');

    const data = await resForm.json();

    logForm.insertAdjacentHTML('beforeend', data);
    logButton.setAttribute('disabled', '');
    regButton.removeAttribute('disabled');
  });
}

if (regButton) {
  regButton.addEventListener('click', async (event) => {
    event.preventDefault();

    formMessage.innerHTML = '';

    logForm.innerHTML = '';

    const resForm = await fetch('/auth/reg');

    const data = await resForm.json();

    regForm.insertAdjacentHTML('beforeend', data);
    regButton.setAttribute('disabled', '');
    logButton.removeAttribute('disabled');
  });
}
