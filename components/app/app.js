!(function () {
  'use strict';

  let Menu = window.Menu;

  let data = {
    items: [
      {
        name: 'Хлеб',
        isDone: false,
      },
      {
        name: 'Молоко',
        isDone: true,
      },
      {
        name: 'Чай',
        isDone: false,
      },
      {
        name: 'Печенье',
        isDone: false,
      },
      {
        name: 'Котлеты',
        isDone: false,
      },
    ],
  };

  let menu = new Menu({
    el: '.js-menu',
    data,
  });

  let form = new Form({
    el: '.js-form',
    data,
    onSubmit: function () {
      return;
    }
  })
})();
