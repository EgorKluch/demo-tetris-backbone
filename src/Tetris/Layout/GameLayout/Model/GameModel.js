'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

var GameModel = Backbone.Model.extend({
  name: 'GameModel',
  defaults: {
    map: _.range(20).map(function () {
      return _.range(10);
    }),
    figure: null,
    useSpecials: false
  }
});

module.exports = GameModel;
