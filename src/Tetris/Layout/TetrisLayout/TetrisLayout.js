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

  onRender: function () {
    this.showContent();
  },

  showContent: function () {
    var Layout = this._getLayoutClass();
    var layout = new Layout({
      model: this.model
    });
    this.getRegion('content').show(layout);
  },

  _getLayoutClass: function () {
    var state = this.model.get('state');
    if (state == 'menu') return MenuLayout;
  }
});

module.exports = TetrisLayout;
