'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var SquareView = require('./GameSquareView');

var GameView = Marionette.CollectionView.extend({
  name: 'GameView',
  sort: false,

  childView: SquareView,

  initialize: function () {
    this.collection =  new Backbone.Collection();

    this.model.get('figure').get('map').on('update', function () {
      this.render();
    }.bind(this));
    this.model.get('map').on('update', function () {
      this.render();
    }.bind(this));
  },

  render: function () {
    var figureMap = this.model.get('figure').get('map');
    var models = _.filter(figureMap.toJSON(), function (square) {
      return square.x >= 0;
    });

    var map = this.model.get('map');
    models = models.concat(map.toJSON());

    this.collection.reset(models, { silent: true });
    Marionette.CollectionView.prototype.render.apply(this, arguments);
  }
});

module.exports = GameView;
