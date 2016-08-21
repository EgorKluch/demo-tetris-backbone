'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var keycomb = require('keycomb');

var SquareView = require('./GameSquareView');

var GameView = Marionette.CollectionView.extend({
  name: 'GameView',
  sort: false,

  childView: SquareView,

  initialize: function () {
    this.collection =  new Backbone.Collection();

    this.model.get('figure').on('change', function () {
      this.render();
    }.bind(this));
    this.model.get('map').on('update', function () {
      this.render();
    }.bind(this));

    $(document).on('keydown.' + this.cid, this.onKeyDown.bind(this))
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
  },

  destroy: function () {
    this.remove();
    app.$document.off('keydown.' + this.cid);
  },

  onKeyDown: function (e) {
    var pressedKeys = _.uniq(keycomb(e)).join('+');
    var figure = this.model.get('figure');
    switch (pressedKeys) {
      case 'left': return figure.left();
      case 'right': return figure.right();
      case 'down': return figure.speedUp();
      case 'up': return figure.turn();
      case 'p': return figure.togglePause();
    }
  },
});

module.exports = GameView;
