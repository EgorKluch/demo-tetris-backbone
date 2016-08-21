'use strict';

var _ = require('underscore');

var MenuItemModel = require('./MenuItemModel');

var CheckboxItemModel = MenuItemModel.extend({
  name: 'CheckboxItemModel',

  defaults: _.extend(MenuItemModel.prototype.defaults, {
    enabled: false
  })
});

module.exports = CheckboxItemModel;
