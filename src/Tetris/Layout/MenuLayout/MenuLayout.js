'use strict';

var Marionette = require('backbone.marionette');

var HighScoreView = require('./View/HighScoreView');

var tetrisMenuTemplate = require('./tpl/MenuLayout.hbs');

var MenuLayout = Marionette.LayoutView.extend({
  template: tetrisMenuTemplate,

  regions: {
    highScore: '.tetrisMenu-highScore',
    menu: '.tetrisMenu-menu'
  },

  onRender: function () {
    this.showHighScoreView();
  },

  showHighScoreView: function () {
    var highScoreView = new HighScoreView({
      model: this.model
    });
    this.getRegion('highScore').show(highScoreView);
  }
});

module.exports = MenuLayout;
