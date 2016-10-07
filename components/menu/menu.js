!(function () {
  'use strict';

  let Form = window.Form;

  let nunjucks = window.nunjucks;
  nunjucks.configure({ autoescape: true });

  class Menu {

    /**
     * Конструктор класс Menu
     * @parm {Object} options
     */
    constructor ({ el, data }) {
      this.el = document.querySelector(el);
      this.data = data;

      this._init();

      this.render();
    }

    render () {
      const html = nunjucks.render('components/menu/menu.nunjucks', this.data);
      this.el.innerHTML = html;
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
      const target = event.target;

      if (target.closest('.js-menu-remove')) {
        this.remove(target);
      } else if (target.closest('.js-menu-item')) {
        this.changeDone(target.closest('.js-menu-item').querySelector('.js-menu-itemText'));
      }
    }

    remove(target) {
      const victim = target.closest('.js-menu-item');
      victim.parentElement.removeChild(victim);
    }

    changeDone(target) {
      const name = target.innerHTML;
      this.data.items.forEach((obj) => {
        if (obj.name === name) {
          obj.isDone = !obj.isDone;
          if (obj.isBought) {
            target.classList.add('is-done');
          } else {
            target.classList.remove('is-done');
          }
        }
      });

      this.render();
    }
  }

  // export
  window.Menu = Menu;
})();
