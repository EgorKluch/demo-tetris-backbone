'use strict';

require('../css/SettingsView.css');

var MainMenuView = require('../../MainMenuLayout/View/MainMenuView');
var MenuItemCollection = require('../../../Component/Menu/Collection/MenuItemCollection');

var SettingsView = MainMenuView.extend({
  name: 'SettingsView',

  initMenuItems: function () {
    this.collection = new MenuItemCollection([{
      id: 'useSpecials',
      label: 'USE SPECIALS',
      type: 'checkbox',
      enabled: this.model.get('useSpecials')
    }, {
      id: 'menu',
      label: 'MAIN MENU'
    }]);
  },

  initActionEvents: function () {
    MainMenuView.prototype.initActionEvents.apply(this, arguments);

    this.on('menuItem:change:enabled', function (menuItemView, { id }) {
      var enabled = menuItemView.model.get('enabled');
      this.model.set(id, enabled);
    }.bind(this));
  }
});

module.exports = SettingsView;
