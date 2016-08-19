'use strict';

var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({
  defaults: {
    active: false,
    id: '',
    label: ''
  }
});

module.exports = MenuItem;
