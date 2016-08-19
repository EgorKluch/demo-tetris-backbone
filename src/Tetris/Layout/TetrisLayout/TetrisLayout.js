'use strict';

require('./css/TetrisLayout.css');

var Marionette = require('backbone.marionette');

var MenuLayout = require('../MenuLayout/MenuLayout');

var tetrisLayoutTemplate = require('./tpl/TetrisLayout.hbs');

var TetrisLayout = Marionette.LayoutView.extend({
  template: tetrisLayoutTemplate,

  regions: {
    content: '.tetrisContent'
  },

  initialize: function () {
    this.model.on('change:screen', this._showScreen.bind(this));
  },

  onRender: function () {
    this._showScreen();
  },

  _showScreen: function () {
    var Layout = this._getScreenLayout();
    var layout = new Layout({
      model: this.model
    });
    this.getRegion('content').show(layout);
  },

  _getScreenLayout: function () {
    var screen = this.model.get('screen');
    if (screen == 'menu') return MenuLayout;
    return Marionette.ItemView;
  }
});

module.exports = TetrisLayout;
