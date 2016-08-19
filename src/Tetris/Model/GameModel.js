'use strict';

var Backbone = require('backbone');

var GameModel = Backbone.Model.extend({
  defaults: {
    screen: 'menu',
    highScore: window.localStorage.getItem('tetris.highScore') || 0
  },

  initialize: function () {
    this.on('change:highScore', function (model, highScore) {
      window.localStorage.setItem('tetris.highScore', highScore);
    });
  }
});

module.exports = GameModel;
