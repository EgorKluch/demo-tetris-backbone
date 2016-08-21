'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var SquareCollection = require('../Collection/GameSquareCollection');

var GameFigure = Backbone.Model.extend({
  name: 'GameFigureModel',

  initialize: function () {
    this.set('map', new SquareCollection());
    this.timer = setInterval(this.step.bind(this), 1000);
  },

  step: function () {
    if (!this.get('map').length) {
      this.createFigure();
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
    this.get('map').add(squares);
  },

  removeFigure: function () {
    this.get('map').reset();
  },

  destroy: function () {
    clearInterval(this.timer);
  }
});

module.exports = GameFigure;
