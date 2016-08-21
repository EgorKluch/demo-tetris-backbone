'use strict';

var MainMenuLayout = require('../MainMenu/MainMenuLayout');
var SettingsView = require('./View/SettingsView');

var SettingsLayout = MainMenuLayout.extend({
  name: 'SettingsLayout',

  showMenu: function () {
    var settingsView = new SettingsView({
      model: this.model
    });
    this.getRegion('menu').show(settingsView);
  }
});

module.exports = SettingsLayout;
