'use strict';

var Marionette = require('backbone.marionette');

var GameSquareView = require('./GameSquareView');
var GameSquareCollection = require('../Collection/GameSquareCollection');

var GameView = Marionette.CollectionView.extend({
  name: 'GameView',
  sort: false,

  childView: GameSquareView,

  initialize: function () {
    this.collection = new GameSquareCollection([{
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 1
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 4
    }, {
      x: 5,
      y: 5
    }, {
      x: 6,
      y: 6
    }, {
      x: 7,
      y: 7
    }, {
      x: 8,
      y: 8
    }, {
      x: 9,
      y: 9
    }, {
      x: 10,
      y: 8
    }, {
      x: 11,
      y: 7
    }, {
      x: 12,
      y: 6
    }, {
      x: 13,
      y: 5
    }, {
      x: 14,
      y: 4
    }, {
      x: 15,
      y: 3
    }, {
      x: 16,
      y: 2
    }, {
      x: 17,
      y: 1
    }, {
      x: 18,
      y: 0
    }, {
      x: 19,
      y: 1
    }]);
  }
});

module.exports = GameView;
