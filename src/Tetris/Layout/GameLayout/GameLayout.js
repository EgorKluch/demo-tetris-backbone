'use strict';

require('./css/GameLayout.css');

var Marionette = require('backbone.marionette');

var GameView = require('./View/GameView');
var GameModel = require('./Model/GameModel');

var gameLayoutTemplate = require('./tpl/GameLayout.twig');

var GameLayout = Marionette.LayoutView.extend({
  name: 'GameLayout',

  template: gameLayoutTemplate,

  regions: {
    game: '.tetris-gameArea'
  },

  onRender: function () {
    this.startGame();
  },

  startGame: function () {
    var gameView = new GameView({
      model: new GameModel({
        useSpecials: this.model.get('useSpecials')
      })
    });
    this.getRegion('game').show(gameView);
  }
});

module.exports = GameLayout;
