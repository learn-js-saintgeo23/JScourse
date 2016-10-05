!(function () {
  'use strict';

  let Form = window.Form;

  class Menu {

    /**
     * Конструктор класс Menu
     * @parm {Object} options
     */
    constructor (options) {
      this.el = options.el;
      this.data = options.data;

      this.container = this.el.querySelector('.js-menu-container');
      this.item = this.container.querySelector('.js-menu-item');
      this.itemTitle = this.item.querySelector('.js-menu-item-title');
      this.content = this.item.querySelector('.js-menu-content');
      this.contentItem = this.content.querySelector('.js-menu-content-item');

      this.templates = document.querySelectorAll('.js-template');

      this.veil = document.querySelector('.js-form-veil');

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

      if (target.classList.contains('js-menu-remove')) {
        this.remove(target);
      } else if (target.classList.contains('js-menu-add')) {
        this.add(target);
      }
    }

    render () {
      this.container.innerHTML = '';

      this.data.forEach((obj) => {

        const item = this.item.cloneNode(true);
        item.querySelector('.js-menu-item-title').innerHTML = obj.title;
        item.querySelector('.js-menu-content').innerHTML = '';

        const content = this.content.cloneNode(false);

        obj.items.forEach((obj) => {
          const contentItem = this.contentItem.cloneNode(true);

          contentItem.querySelector('.js-menu-content-name').innerHTML = obj.name;
          contentItem.querySelector('.js-menu-content-link').setAttribute('href', obj.url);
          contentItem.querySelector('.js-menu-content-url').innerHTML = obj.url;
          contentItem.querySelector('.js-menu-content-description').innerHTML = obj.desc;

          content.appendChild(contentItem);
        });

        item.querySelector('.js-menu-content').innerHTML = content.innerHTML;

        this.container.appendChild(item);
      });

    }

    remove(target) {
      let victim;
      let intention;
      if (target.closest('.js-menu-content-item')) {
        intention = confirm("Вы действительно хотите удалить эту запись?");
        victim = target.closest('.js-menu-content-item');
      } else if (target.closest('.js-menu-item')) {
        intention = confirm("Вы действительно хотите удалить этот раздел?");
        victim = target.closest('.js-menu-item');
      }

      if (intention) {
        const container = victim.parentElement;
        container.removeChild(victim);
      }
    }

    add(target) {
      let container;
      let type;
      if (target.closest('.js-menu-container')) {
        container = target.closest('.js-menu-content');
        type = 'note';
      } else if (target.closest('.js-menu-title')) {
        container = target.closest('.js-menu-container');
        type = 'section';
      }

      let form = new Form(type);
      this.showForm();
    }

    showForm() {
      this.veil.classList.add('is-visible');
    }








    /**
     * Переключение состояния меню
     */
    toggle() {
      this.el.classList.toggle('menu_close');
    }
  }

  // export
  window.Menu = Menu;
})();
