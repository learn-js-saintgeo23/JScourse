!(function () {
  'use strict';

  let Form = window.Form;

  class Menu {

    /**
     * Конструктор класс Menu
     * @parm {Object} options
     */
    constructor ({data, container}) {
      this.data = data;
      this.container = document.querySelector(container);

      this.render();

      this._init();
    }

    render () {
    }

    /**
     * Установка обработчиков событий
     */
    _init () {
      // this.el.addEventListener('click', this._onCLick.bind(this));
    }

    /**
     * Обработчик всех кликов по меню
     * @param {MouseEvent} event
     */
    _onCLick (event) {
      let target = event.target;

      if (target.closest('.js-menu-remove')) {
        this.remove(target);
      } else if (target.closest('.js-menu-item')) {
        this.changeBought(target.closest('.js-menu-item').querySelector('.js-menu-itemText'));
      }
    }

    remove(target) {
      let victim;
      let intention;
      intention = confirm('Удалить этот пункт?');
      victim = target.closest('.js-menu-itemText');

      if (intention) {
        victim.parentElement.removeChild(victim);
      }
    }

    changeBought(target) {
      const name = target.innerHTML;
        console.log(name);
      this.data.forEach((obj) => {
        if (obj.name === name) {
          obj.isBought = !obj.isBought;
          if (obj.isBought) {
            target.classList.add('is-bought');
          } else {
            target.classList.remove('is-bought');
          }
        }
      });
      this.render();
    }
  }

  // export
  window.Menu = Menu;
})();
