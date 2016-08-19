'use strict';

var Marionette = require('backbone.marionette');

var HighScoreView = require('./View/HighScoreView');
var MenuView = require('./View/MenuView');

var tetrisMenuTemplate = require('./tpl/MenuLayout.hbs');


var MenuLayout = Marionette.LayoutView.extend({
  template: tetrisMenuTemplate,

  regions: {
    highScore: '.tetrisMenu-highScore',
    menu: '.tetrisMenu-menu'
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
    var menuView = new MenuView();
    this.getRegion('menu').show(menuView);
    menuView.on('action', function (options) {
      this.model.set('screen', options.id);
    }.bind(this));
  }
});

module.exports = MenuLayout;
