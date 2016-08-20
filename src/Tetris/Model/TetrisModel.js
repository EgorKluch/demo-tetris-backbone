'use strict';

var Backbone = require('backbone');

var GameModel = Backbone.Model.extend({
  name: 'GameModel',

  defaults: {
    screen: 'menu',
    highScore: parseInt(window.localStorage.getItem('tetris.highScore')) || 0,
    useSpecials: window.localStorage.getItem('tetris.useSpecials') === 'true'
  },

  initialize: function () {
    this.on('change:highScore', function (model, highScore) {
      window.localStorage.setItem('tetris.highScore', highScore);
    });
    this.on('change:useSpecials', function (model, useSpecials) {
      window.localStorage.setItem('tetris.useSpecials', useSpecials);
    });
  }
});

module.exports = GameModel;
