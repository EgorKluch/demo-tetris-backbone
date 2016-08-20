'use strict';

require('./css/TetrisLayout.css');

var Marionette = require('backbone.marionette');

var MainMenuLayout = require('../MainMenuLayout/MainMenuLayout');
var SettingsLayout = require('../SettingsLayout/SettingsLayout');

var tetrisLayoutTemplate = require('./tpl/TetrisLayout.hbs');

var TetrisLayout = Marionette.LayoutView.extend({
  name: 'TetrisLayout',

  template: tetrisLayoutTemplate,

  regions: {
    content: '.tetrisContent'
  },

  initialize: function () {
    this.model.on('change:screen', this.showScreen.bind(this));
  },

  onRender: function () {
    this.showScreen();
  },

  showScreen: function () {
    var Layout = this.getScreenLayout();
    var layout = new Layout({
      model: this.model
    });
    this.getRegion('content').show(layout);
  },

  getScreenLayout: function () {
    var screen = this.model.get('screen');
    if (screen == 'menu') return MainMenuLayout;
    if (screen == 'settings') return SettingsLayout;
    return Marionette.ItemView;
  }
});

module.exports = TetrisLayout;
