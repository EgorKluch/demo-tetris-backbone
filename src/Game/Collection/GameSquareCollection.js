'use strict';

var Backbone = require('backbone');
var Square = require('../Model/GameSquareModel');

var GameSquareCollection = Backbone.Collection.extend({
  name: 'GameSquareCollection',
  model: Square
});

module.exports = GameSquareCollection;
