'use strict';

require('../css/GameSquareView.css');

var Marionette = require('backbone.marionette');

var gameSquarTemplate = require('../tpl/GameSquareView.twig');

var GameSquareView = Marionette.ItemView.extend({
  name: 'GameSquareView',
  className: 'tetris-square',
  template: gameSquarTemplate,

  initialize: function () {
    this.model.on('change', this.changeFigure.bind(this));
  },

  onRender: function () {
    this.changeFigure();
  },

  changeFigure: function () {
    var color = this.model.get('color');
    this.$el.css({
      left: this.model.get('y') * 20 + 1,
      top: this.model.get('x') * 20 + 1,
      border: '2px solid ' + color
    });
    this.$('.tetris-squareInner').css({
      backgroundColor: color
    });
  }
});

module.exports = GameSquareView;
