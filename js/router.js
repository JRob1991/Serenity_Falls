import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import HomeComponent from './views/home';
import FormComponent from './views/formplay';
import SpinnerComponent from './views/spinner';

const RECORD = {message: "All the things!"};

export default Backbone.Router.extend({

  routes: {
    ""      : "showHome",
    "form"  : "showForm"
  },

  initialize(appElement) {
    this.el = appElement;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.render(<SpinnerComponent/>);
  },

  showHome() {
    this.render(
      <HomeComponent
       onFormClick={() => this.goto('form')}
       onSpinClick={() => this.showSpinner()}
      />
    );
  },

  showForm() {
    this.render(
      <FormComponent
        record={RECORD}
        onCancelClick={() => this.goto('')}
        onSubmit={(msg) => this.saveForm(msg)}
      />
    );
  },

  saveForm(message) {
    this.showSpinner();
    alert(`Simulating saving: ${message}`);
    this.goto('');
  }

});
