'use strict';

var Backbone = require('backbone');

var MenuItem = require('../Model/MenuItemModel');
var CheckboxItem = require('../Model/CheckboxItemModel');

var MenuItemCollection = Backbone.Collection.extend({
  name: 'MenuItemCollection',

  model: function (attrs, options) {
    var { type } = attrs;
    switch (type) {
      case 'menuItem': return new MenuItem(attrs, options);
      case 'checkbox': return new CheckboxItem(attrs, options);
    }
    return new MenuItem(attrs, options);
  }
});

module.exports = MenuItemCollection;
