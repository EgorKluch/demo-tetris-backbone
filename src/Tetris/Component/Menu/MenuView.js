'use strict';

require('./css/MenuItem.css');

var _ = require('underscore');
var Marionette = require('backbone.marionette');
var keycomb = require('keycomb');

var MenuItemView = require('./View/MenuItemView');
var CheckboxMenuItemView = require('./View/CheckboxMenuItemView');
var MenuItemCollection = require('./Collection/MenuItemCollection');

var MenuView = Marionette.CollectionView.extend({
  name: 'MenuView',

  childViewEventPrefix: "menuItem",

  getChildView: function (item) {
    var type = item.get('type');
    switch (type) {
      case 'menuItem':
        return MenuItemView;
      case 'checkbox':
        return CheckboxMenuItemView;
    }
    throw new Error('Menu item with type ' + type + '" not found!');
  },

  initialize: function () {
    this.initCollection();
    this.initActionEvents();
    this.initKeyDownHandler();
  },

  initMenuItems: function () {
    this.collection = new MenuItemCollection([])
  },

  initCollection: function () {
    this.initMenuItems();

    this.collection.on('change:active', function () {
      // this.render();
    }.bind(this));

    this.activeItemIndex = 0;
    this.collection.at(this.activeItemIndex).set('active', true);
  },

  initActionEvents: function () {
    this.on('menuItem:change:screen', function (menuItemView, { id }) {
      this.model.set('screen', id);
    }.bind(this));
  },

  moveUp: function () {
    if (!this.activeItemIndex) return;
    this.collection.at(this.activeItemIndex).set('active', false);
    this.activeItemIndex--;
    this.collection.at(this.activeItemIndex).set('active', true);
    this.render();
  },

  moveDown: function () {
    if (this.activeItemIndex) return;
    this.collection.at(this.activeItemIndex).set('active', false);
    this.activeItemIndex++;
    this.collection.at(this.activeItemIndex).set('active', true);
    this.render();
  },

  destroy: function () {
    this.remove();
    app.$document.off('keydown.tetrisMenuItem.select');
  },

  initKeyDownHandler: function () {
    app.$document.on('keydown.tetrisMenuItem.select', function (e) {
      var pressedKeys = _.uniq(keycomb(e)).join('+');
      switch (pressedKeys) {
        case 'up':
          this.moveUp();
          break;
        case 'down':
          this.moveDown();
          break;
      }
    }.bind(this));
  }
});

module.exports = MenuView;
