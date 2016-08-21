'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var SquareCollection = require('../Collection/GameSquareCollection');

var GameFigure = Backbone.Model.extend({
  name: 'GameFigureModel',

  initialize: function () {
    this.set('map', new SquareCollection());
    this.step();
  },

  step: function () {
    if (!this.get('map').length) {
      this.createFigure();
      return;
    }

    var x = this.get('x');
    this.set('x', x + 1);

    if (x >= 18) {
      this.createFigure();

    }

    this.updateMap();
  },

  left: function () {
    if (this.get('blockMoving')) return;
    var y = this.get('y');
    if (y <= 0) return;
    this.set('y', y - 1);
    this.updateMap();
  },

  right: function () {
    if (this.get('blockMoving')) return;
    var y = this.get('y');
    if (y >= 7) return;
    this.set('y', y + 1);
    this.updateMap();
  },

  setInterval: function (interval) {
    clearInterval(this.timer);
    this.timer = setInterval(this.step.bind(this), interval);
  },

  createFigure: function () {
    this.setInterval(500);
    this.set('source', [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 2 }
    ]);
    this.set('x', 0);
    this.set('y', 3);
    this.set('color', '#369');
    this.set('blockMoving', false);
    this.updateMap();
  },

  speedUp: function () {
    this.setInterval(30);
    this.set('blockMoving', true);
  },

  updateMap: function () {
    var squares = _.map(this.get('source'), function (source) {
      return {
        x: source.x + this.get('x'),
        y: source.y + this.get('y'),
        color: this.get('color')
      }
    }.bind(this));
    this.get('map').reset(squares);
    this.trigger('change');
  },

  destroy: function () {
    clearInterval(this.timer);
  }
});

module.exports = GameFigure;
