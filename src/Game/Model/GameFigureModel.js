'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var SquareCollection = require('../Collection/GameSquareCollection');

var figures = require('../source/figures');

var GameFigure = Backbone.Model.extend({
  name: 'GameFigureModel',

  initialize: function () {
    this.set('map', new SquareCollection());
    this.step();
  },

  step: function () {
    if (this.get('pause')) return;

    if (!this.get('map').length) {
      this.createFigure();
      return;
    }

    var x = this.get('x');
    this.set('x', x + 1);

    if (x >= 20 - this.get('height')) {
      this.createFigure();
    }

    this.updateMap();
  },

  left: function () {
    if (this.get('blockMoving') || this.get('pause')) return;
    var y = this.get('y');
    if (y <= 0) return;
    this.set('y', y - 1);
    this.updateMap();
  },

  right: function () {
    if (this.get('blockMoving') || this.get('pause')) return;
    var y = this.get('y');
    if (y >= 10 - this.get('width')) return;
    this.set('y', y + 1);
    this.updateMap();
  },

  turn: function () {
    if (this.get('blockMoving') || this.get('pause')) return;
    var state = this.get('state');
    var figure = this.get('figure');
    state++;
    if (state === figure.states.length) state = 0;
    this.set('state', state);
    this.updateMap();
  },

  speedUp: function () {
    if (this.get('pause')) return;
    this.setInterval(30);
    this.set('blockMoving', true);
  },

  togglePause: function () {
    this.set('pause', !this.get('pause'));
  },

  setInterval: function (interval) {
    clearInterval(this.timer);
    this.timer = setInterval(this.step.bind(this), interval);
  },

  createFigure: function () {
    this.setInterval(500);
    var figure = _.sample(figures);
    this.set('figure', figure);
    var state = _.random(figure.states.length - 1);
    this.set('state', state);
    var source = this.get('figure').states[this.get('state')];
    this.set('source', source);
    this.set('height', _.max(source, function (square) {
        return square.x;
      }).x + 1);
    this.set('width', _.max(source, function (square) {
        return square.y;
      }).y + 1);
    this.set('x', -this.get('height'));
    this.set('y', Math.floor(5 - this.get('width') / 2));
    this.set('color', figure.color);
    this.set('blockMoving', false);
    this.updateMap();
  },

  updateMap: function () {
    var source = this.get('figure').states[this.get('state')];
    this.set('height', _.max(source, function (square) {
        return square.x;
      }).x + 1);
    this.set('width', _.max(source, function (square) {
        return square.y;
      }).y + 1);
    var squares = _.map(source, function (source) {
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
