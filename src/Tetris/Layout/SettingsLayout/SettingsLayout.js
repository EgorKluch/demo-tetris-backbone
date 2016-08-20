'use strict';

var MainMenuLayout = require('../MainMenuLayout/MainMenuLayout');
var SettingsView = require('./View/SettingsView');

var SettingsLayout = MainMenuLayout.extend({
  name: 'SettingsLayout',

  addScreenClass: function () {
    this.$el.addClass('tetrisScreen-settings');
  },

  _showMenu: function () {
    var settingsView = new SettingsView({
      model: this.model
    });
    this.getRegion('menu').show(settingsView);
  }
});

module.exports = SettingsLayout;
