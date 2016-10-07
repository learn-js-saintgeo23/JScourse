!(function () {
  'use strict';

  let nunjucks = window.nunjucks;
  nunjucks.configure({ autoescape: true });

  class Form {
    constructor({ el, data, onSubmit }) {
      this.el = document.querySelector(el);
      this.data = data;
      this.onSubmit = onSubmit.bind(this);

      this.render();
    }

    render() {
      const html = nunjucks.render('components/form/form.nunjucks');

      this.el.innerHTML = html;
      this.container = this.el.querySelector('.js-form-container');
        this.input = this.el.querySelector('.js-form-input');

      this._init();
    }

    _init () {
      this.el.addEventListener('click', this._onClick.bind(this));
      this.container.addEventListener('submit', this.doSubmit.bind(this));
    }

    _onClick(event) {
      const target = event.target;

      if (target.closest('.js-form-submit')) {
        if (this.el.classList.contains('is-collapsed')) {
          this.open();
        } else {
            const value = this.input.value;
            
            if (value === '') {
                this.close();
            } else {
                this.onSubmit(value);
            }
        }


      } else if (target.closest('.js-menu-item')) {
        this.changeDone(target.closest('.js-menu-item').querySelector('.js-menu-itemText'));
      }
    }

    open() {
      this.el.classList.remove('is-collapsed');
        this.input.focus();
    }

    close() {
      this.el.classList.add('is-collapsed');
    }
      
    doSubmit(event) {
      event.preventDefault();
      const value = this.el.querySelector('.js-form-input').value;
      this.onSubmit(value);
      this.clear();
    }
      
    clear() {
      this.input.value = '';
    }
  }

  // export
  window.Form = Form;
})();
