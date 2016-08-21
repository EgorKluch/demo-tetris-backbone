'use strict';

var Backbone = require('backbone');

var MenuItemModel = Backbone.Model.extend({
  name: 'MenuItemModel',

  defaults: {
    active: false,
    id: '',
    label: '',
    type: 'menuItem'
  }
});

module.exports = MenuItemModel;
