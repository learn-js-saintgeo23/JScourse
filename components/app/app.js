!(function () {
  'use strict';

  let Menu = window.Menu;

  let data = [
    {
      title: 'Рабочие',
      items: [
        {
          name: 'Mail.Ru',
          url: 'https://mail.ru',
          desc: 'Mail.Ru website',
        },
        {
          name: 'Yandex',
          url: 'https://yandex.ru',
          desc: 'Yandex website',
        },
        {
          name: 'Google',
          url: 'https://google.com',
          desc: 'Google website',
        },
      ],
    },
    {
      title: 'Развлечения',
      items: [
        {
          name: 'Yandex music',
          url: 'https://music.yandex.ru',
          desc: 'Yandex music website',
        },
        {
          name: 'iFunny',
          url: 'https://ifunny.co/',
          desc: 'Some fun stuff!',
        },
      ],
    },
  ];

  let menu = new Menu({
    el: document.querySelector('.js-menu'),
    data,
  });
})();
