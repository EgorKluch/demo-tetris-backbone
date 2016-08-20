'use strict';

require('../css/CheckboxItem.css');

var MenuItemView = require('./MenuItemView');

var checkboxItemTemplate = require('../tpl/CheckboxItem.twig');

var CheckboxItemView = MenuItemView.extend({
  name: 'CheckboxItemView',

  template: checkboxItemTemplate,

  doAction: function () {
    this.model.set('enabled', !this.model.get('enabled'));
    this.trigger('change:enabled', {
      id: this.model.get('id')
    });
    this.render();
  }
});

module.exports = CheckboxItemView;
