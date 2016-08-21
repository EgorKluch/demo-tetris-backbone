'use strict';

var _ = require('underscore');
var Marionette = require('backbone.marionette');
var keycomb = require('keycomb');

var menuItemTemplate = require('../tpl/MenuItem.twig');

var MenuItemView = Marionette.ItemView.extend({
  name: 'MenuItemView',

  template: menuItemTemplate,

  initialize: function () {
    this.onToggleActive();
    this.on('change:active', this.onToggleActive.bind(this));
  },

  doAction: function () {
    this.trigger('change:screen', {
      id: this.model.get('id')
    });
  },

  onToggleActive: function () {
    app.$document.off('keydown.' + this.cid);

    var active = this.model.get('active');
    if (active) {
      app.$document.on('keydown.' + this.cid, this.onKeydown.bind(this));
    }
  },

  onKeydown: function (e) {
    var pressedKeys = _.uniq(keycomb(e)).join('+');
    if (pressedKeys == 'enter') {
      this.doAction();
    }
  },

  destroy: function () {
    this.remove();
    app.$document.off('keydown.' + this.cid);
  }
});

module.exports = MenuItemView;
