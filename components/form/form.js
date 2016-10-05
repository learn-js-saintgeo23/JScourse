!(function () {
  'use strict';

  class Form {
    constructor(type) {
      console.log(type);
      this.type = type;
      this.container = document.querySelector('.form__container');
      this.form = document.querySelector(`[data-action="${this.type}"]`).innerHTML;

      this.render();
    }

    render() {
      this.container.innerHTML = this.form;
    }
  }

  // export
  window.Form = Form;
})();
