!(function () {
  'use strict';

  let Menu = window.Menu;

  let data = [
    {
      name: 'Хлеб',
      isBought: false,
    },
    {
      name: 'Молоко',
      isBought: true,
    },
    {
      name: 'Чай',
      isBought: false,
    },
    {
      name: 'Печенье',
      isBought: false,
    },
    {
      name: 'Котлеты',
      isBought: false,
    },
  ];

  // let menu = new Menu({
  //   data,
  //   container: '.app',
  // });

  let form = new Form({
    data,
    container: '.app',
    onSubmit: function () {
      return;
    }
  })
})();
