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
    }])
  }
});

module.exports = SettingsView;
