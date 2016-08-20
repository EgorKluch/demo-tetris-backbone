'use strict';

require('../css/CheckboxItem.css');

var MenuItemView = require('./MenuItemView');

var checkboxItemTemplate = require('../tpl/CheckboxItem.twig');

var CheckboxItemView = MenuItemView.extend({
  name: 'CheckboxItemView',

  template: checkboxItemTemplate,

  doAction: function () {
    this.model.set('enabled', !this.model.get('enabled'));
    this.render();
  }
});

module.exports = CheckboxItemView;
