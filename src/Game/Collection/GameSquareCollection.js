'use strict';

var Backbone = require('backbone');
var GameSquareModel = require('../Model/GameSquareModel');

var GameSquareCollection = Backbone.Collection.extend({
  name: 'GameSquareCollection',
  model: GameSquareModel
});

module.exports = GameSquareCollection;
