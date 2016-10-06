!(function () {
  'use strict';

  class Form {
    constructor({data, container, onSubmit}) {
      this.data = data;
      this.container = document.querySelector(container);
      this.onSubmit = onSubmit.bind(this);

      this.render();
    }

    render() {
      const source   = document.querySelector("#form-template").innerHTML;
      const template = Handlebars.compile(source);
      const form = template();

      this.container.appendChild(form);
    }
  }

  // export
  window.Form = Form;
})();
