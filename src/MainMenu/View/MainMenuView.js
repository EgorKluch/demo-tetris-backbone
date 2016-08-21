'use strict';

var MenuView = require('../../Component/Menu/MenuView');
var MenuItemCollection = require('../../Component/Menu/Collection/MenuItemCollection');

var MainMenuView = MenuView.extend({
  name: 'MainMenuView',

  initMenuItems: function () {
    this.collection = new MenuItemCollection([{
      id: 'game',
      label: 'PLAY'
    }, {
      id: 'settings',
      label: 'SETTINGS'
    }]);
  },

  initialize: function () {
    MenuView.prototype.initialize.apply(this, arguments);
    window.mainMenuView = this;
  }
});

module.exports = MainMenuView;
