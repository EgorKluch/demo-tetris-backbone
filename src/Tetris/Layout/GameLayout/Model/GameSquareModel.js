'use strict';

var Backbone = require('backbone');

var GameSquareModel = Backbone.Model.extend({
  name: 'GameSquareModel',
  defaults: {
    x: 0,
    y: 0
  }
});

module.exports = GameSquareModel;
