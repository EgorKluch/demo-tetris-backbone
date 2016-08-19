'use strict';

var Marionette = require('backbone.marionette');

var menuItemTemplate = require('../tpl/MenuItem.hbs');

var MenuItemView = Marionette.ItemView.extend({
  template: menuItemTemplate
  
  
});

module.exports = MenuItemView;
