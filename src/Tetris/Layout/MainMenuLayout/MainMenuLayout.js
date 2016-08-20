'use strict';

var Marionette = require('backbone.marionette');

var HighScoreView = require('./View/HighScoreView');
var MenuView = require('./View/MainMenuView');

var tetrisMenuTemplate = require('./tpl/MenuLayout.hbs');


var MainMenuLayout = Marionette.LayoutView.extend({
  name: 'MainMenuLayout',

  template: tetrisMenuTemplate,

  regions: {
    highScore: '.tetrisMenu-highScore',
    menu: '.tetrisMenu-menu'
  },

  initialize: function () {
    this.addScreenClass();
  },

  addScreenClass: function () {
    this.$el.addClass('tetrisScreen-menu');
  },

  onRender: function () {
    this._showHighScore();
    this._showMenu();
  },

  _showHighScore: function () {
    var highScoreView = new HighScoreView({
      model: this.model
    });
    this.getRegion('highScore').show(highScoreView);
  },

  _showMenu: function () {
    var menuView = new MenuView({
      model: this.model
    });
    this.getRegion('menu').show(menuView);
  }
});

module.exports = MainMenuLayout;
