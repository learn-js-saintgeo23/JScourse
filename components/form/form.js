!(function () {
  'use strict';

  let nunjucks = window.nunjucks;
  nunjucks.configure({ autoescape: true });

  class Form {
    constructor({ el, data, onSubmit }) {
      this.el = document.querySelector(el);
      this.data = data;
      this.onSubmit = onSubmit;

      this.render();
    }

    render() {
      const html = nunjucks.render('components/form/form.nunjucks');

      this.el.innerHTML = html;

      this._init();
    }

    _init () {
      this.el.addEventListener('click', this._onClick.bind(this));
    }

    _onClick(event) {
      const target = event.target;

      if (target.closest('.js-form-submit')) {
        if (this.el.classList.contains('is-collapsed')) {
          this.open();
        }


      } else if (target.closest('.js-menu-item')) {
        this.changeDone(target.closest('.js-menu-item').querySelector('.js-menu-itemText'));
      }
    }

    open() {
      this.el.classList.remove('is-collapsed');
    }
  }

  // export
  window.Form = Form;
})();
