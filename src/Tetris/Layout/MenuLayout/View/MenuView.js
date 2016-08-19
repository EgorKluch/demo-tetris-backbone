'use strict';

var Marionette = require('backbone.marionette');

var MenuItemView = require('./MenuItemView');
var MenuItemCollection = require('../Collection/MenuItemCollection');


var MenuView = Marionette.CollectionView.extend({
  childView: MenuItemView,

  events: {
    keydown: function (e) {
      console.log(e);
    }
  },

  initialize: function () {
    this.activeItemIndex = 0;

    /** @type Backbone.Collection */
    this.items = new MenuItemCollection([{
      id: 'play',
      label: 'Play'
    }, {
      id: 'settings',
      label: 'Settings'
    }]);

    this.items.at(this.activeItemIndex).set('active', true);
  }
});

module.exports = MenuView;
