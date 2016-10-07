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
        const name = victim.querySelector('.js-menu-itemText').textContent;
      victim.parentElement.removeChild(victim);
        let i;
        this.data.items.forEach((item, index) => {
            if (item.name === name) {
                i = index;
            }
        })
        this.data.items.splice(i, 1);
    }

    changeDone(target) {
      const name = target.innerHTML;
      this.data.items.forEach((obj) => {
        if (obj.name === name) {
          obj.isDone = !obj.isDone;
          if (obj.isDone) {
            target.classList.add('is-done');
          } else {
            target.classList.remove('is-done');
          }
        }
      });

      this.render();
    }
      
    add(value) {
        const arr = value.split(',');
        
        arr.forEach((item) => {
            item = item.trim();
            
            if (item !== '') {
              let twin = false;

              this.data.items.forEach((obj) => {
                if (obj.name.toLowerCase() === item.toLowerCase()) {
                    twin = true;
                }
              });

              if (!twin) {
                this.data.items.push({
                  name: item,
                  isDone: false,
                });
              }
            }
        });

      this.render();
    }
  }

  // export
  window.Menu = Menu;
})();
