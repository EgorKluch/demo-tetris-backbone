'use strict';

require('./css/TetrisLayout.css');

var Marionette = require('backbone.marionette');

var MainMenuLayout = require('../MainMenu/MainMenuLayout');
var SettingsLayout = require('../Settings/SettingsLayout');
var GameLayout = require('../Game/GameLayout');

var tetrisLayoutTemplate = require('./tpl/TetrisLayout.twig');

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
    switch (screen) {
      case 'menu': return MainMenuLayout;
      case 'settings': return SettingsLayout;
      case 'game': return GameLayout
    }
    throw new Error('Screen "' + screen + '" not found!');
  }
});

module.exports = TetrisLayout;
