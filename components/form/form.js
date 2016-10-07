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

      this._init();
    }

    _init () {
      this.el.addEventListener('click', () => { console.log('click!'); });
    }
  }

  // export
  window.Form = Form;
})();
