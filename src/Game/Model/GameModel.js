'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

var SquareCollection = require('../Collection/GameSquareCollection');
var Figure = require('../Model/GameFigureModel');

var GameModel = Backbone.Model.extend({
  name: 'GameModel',
  defaults: {
    useSpecials: false
  },

  initialize: function () {
    this.set('map', new SquareCollection());
    this.set('figure', new Figure());
  },

  getAt: function (x, y) {
    var map = this.get('map');
    return _.find(map, function (square) {
      return square.x == x && square.y == y;
    }) || null;
  }
});

module.exports = GameModel;
