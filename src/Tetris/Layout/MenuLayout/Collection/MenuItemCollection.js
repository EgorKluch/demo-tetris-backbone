'use strict';

var Backbone = require('backbone');

var MenuItem = require('../Model/MenuItem');

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem
});

module.exports = MenuItemCollection;
