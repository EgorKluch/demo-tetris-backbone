'use strict';

require('../css/MenuItem.css');

var _ = require('underscore');
var Marionette = require('backbone.marionette');
var keycomb = require('keycomb');

var MenuItemView = require('./MenuItemView');
var MenuItemCollection = require('../Collection/MenuItemCollection');

var MenuView = Marionette.CollectionView.extend({
  childView: MenuItemView,

  collection: new MenuItemCollection([{
    id: 'play',
    label: 'PLAY'
  }, {
    id: 'settings',
    label: 'SETTINGS'
  }]),

  initialize: function () {

    this.collection.on('change:active', this.render.bind(this));

    this.activeItemIndex = 0;
    this.collection.at(this.activeItemIndex).set('active', true);

    this._initKeyDownHandler();
  },

  up: function () {
    if (!this.activeItemIndex) return;
    this.collection.at(this.activeItemIndex).set('active', false);
    this.activeItemIndex--;
    this.collection.at(this.activeItemIndex).set('active', true);
  },

  down: function () {
    if (this.activeItemIndex) return;
    this.collection.at(this.activeItemIndex).set('active', false);
    this.activeItemIndex++;
    this.collection.at(this.activeItemIndex).set('active', true);
  },

  destroy: function () {
    app.$document.off('.tetrisMenuItem');
  },

  _initKeyDownHandler: function () {
    app.$document.on('keydown.tetrisMenuItem', function (e) {
      var pressedKeys = _.uniq(keycomb(e)).join('+');
      switch (pressedKeys) {
        case 'up':
          this.up();
          break;
        case 'down':
          this.down();
          break;
      }
    }.bind(this));
  }
});

module.exports = MenuView;
