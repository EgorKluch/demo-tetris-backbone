'use strict';

var Marionette = require('backbone.marionette');

var HighScoreView = require('./View/HighScoreView');
var MenuView = require('./View/MainMenuView');

var mainMenuTemplate = require('./tpl/MainMenuLayout.twig');

var MainMenuLayout = Marionette.LayoutView.extend({
  name: 'MainMenuLayout',

  template: mainMenuTemplate,

  regions: {
    highScore: '.tetrisMenu-highScore',
    menu: '.tetrisMenu-menu'
  },

  onRender: function () {
    this.showHighScore();
    this.showMenu();
  },

  showHighScore: function () {
    var highScoreView = new HighScoreView({
      model: this.model
    });
    this.getRegion('highScore').show(highScoreView);
  },

  showMenu: function () {
    var menuView = new MenuView({
      model: this.model
    });
    this.getRegion('menu').show(menuView);
  }
});

module.exports = MainMenuLayout;
