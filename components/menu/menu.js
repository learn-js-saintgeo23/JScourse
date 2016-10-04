!(function () {
    'use strict';

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
            this.contentName = this.contentItem.querySelector('.js-menu-content-name');
            this.contentLink = this.contentItem.querySelector('.js-menu-content-link');
            this.contentUrl = this.contentItem.querySelector('.js-menu-content-url');
            this.contentDescription = this.contentItem.querySelector('.js-menu-content-description');

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
            }
        }

        render () {
            this.container.innerHTML = '';

            this.data.forEach((obj) => {

                let item = this.item.cloneNode(true);
                item.querySelector('.js-menu-item-title').innerHTML = obj.title;
                item.querySelector('.js-menu-content').innerHTML = '';

                const content = this.content.cloneNode(false);

                obj.items.forEach((obj) => {
                    const contentItem = this.contentItem.cloneNode(true);

                    contentItem.querySelector('.js-menu-content-name').innerHTML = obj.name;
                    contentItem.querySelector('.js-menu-content-link').setAttribute('href', obj.url);
                    contentItem.querySelector('.js-menu-content-url').innerHTML = obj.url;
                    contentItem.querySelector('.js-menu-content-description').innerHTML = obj.description;

                    content.appendChild(contentItem);
                });

                item.querySelector('.js-menu-content').innerHTML = content.innerHTML;

                this.container.appendChild(item);
            });


        }

        /**
         * Выбор элемента меню
         * @param {HTMLElement} elem
         */
        toggleItem (elem) {
            elem.classList.toggle('menu__item_selected');
            elem.style.color = elem.dataset.highlight;
        }

        /**
         * Переключение состояния меню
         */
        toggle() {
            this.el.classList.toggle('menu_close');
        }

        /**
         * Получение данных о состоянии меню
         * @returns {Array}
         */
        getData () {
            return Array.prototype.filter.call(this.items, item => {
                return item.classList.contains('menu__item_selected');
            }).map(el => el.innerHTML);
        }
    }

    // export
    window.Menu = Menu;
})();