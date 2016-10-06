!(function () {
  'use strict';

  let Form = window.Form;

  class Menu {

    /**
     * Конструктор класс Menu
     * @parm {Object} options
     */
    constructor ({el, data}) {
      this.el = el;
      this.data = data;

      this.container = this.el.querySelector('.js-menu-container');
      this.item = this.container.querySelector('.js-menu-item');

      this._init();

      this.render();
    }

    /**
     * Установка обработчиков событий
     */
    _init () {
      this.el.addEventListener('click', this._onCLick.bind(this));
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

    render () {
      this.container.innerHTML = '';

      this.data.forEach((obj) => {
        const item = this.item.cloneNode(true);
        item.querySelector('.js-menu-itemText').innerHTML = obj.name;
        if (obj.isBought) {
          item.classList.add('is-bought');
        }

        this.container.appendChild(item);
      });

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
