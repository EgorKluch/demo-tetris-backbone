'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

var GameSquareCollection = require('../Collection/GameSquareCollection');
var GameFigureCollection = require('./../Collection/GameFigureCollection');

var GameModel = Backbone.Model.extend({
  name: 'GameModel',
  defaults: {
    useSpecials: false
  },

  initialize: function () {
    this.set('map', new GameSquareCollection());
    this.set('figure', new GameFigureCollection());
  },

  getAt: function (x, y) {
    var map = this.get('map');
    return _.find(map, function (square) {
      return square.x == x && square.y == y;
    }) || null;
  }
});

module.exports = GameModel;
