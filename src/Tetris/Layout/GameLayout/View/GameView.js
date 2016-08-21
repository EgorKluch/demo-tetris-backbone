'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var GameSquareView = require('./GameSquareView');
var GameSquareCollection = require('../Collection/GameSquareCollection');

var GameView = Marionette.CollectionView.extend({
  name: 'GameView',
  sort: false,

  childView: GameSquareView,

  initialize: function () {
    this.collection =  new Backbone.Collection();

    this.model.get('figure').on('update', function () {
      this.render();
    }.bind(this));
    this.model.get('map').on('update', function () {
      this.render();
    }.bind(this));
  },

  render: function () {
    var models = this.model.get('map').toJSON();
    models = models.concat(_.filter(this.model.get('figure').toJSON(), function (square) {
      return square.x >= 0;
    }));
    this.collection.reset(models, { silent: true });
    Marionette.CollectionView.prototype.render.apply(this, arguments);
  }
});

module.exports = GameView;
