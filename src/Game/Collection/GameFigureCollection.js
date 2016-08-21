'use strict';

var _ = require('underscore');

var GameSquareCollection = require('./GameSquareCollection');

var GameFigureCollection = GameSquareCollection.extend({
  name: 'GameFigureCollection',

  initialize: function () {
    this.timer = setInterval(this.step.bind(this), 1000);
  },

  step: function () {
    if (!this.length) {
      return this.createFigure();
    }
  },

  createFigure: function () {
    this._source = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 2 }
    ];
    this._color = '#369';
    var squares = _.map(this._source, function (source) {
      return {
        x: source.x - 1,
        y: source.y + 3,
        color: this._color
      }
    }.bind(this));
    this.add(squares);
  },

  destroy: function () {
    clearInterval(this.timer);
  }
});

module.exports = GameFigureCollection;
