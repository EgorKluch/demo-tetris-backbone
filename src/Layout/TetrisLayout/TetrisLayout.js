require('./css/TetrisLayout.css');

var tetrisLayoutTemplate = require('./tpl/TetrisLayout.hbs');

var Marionette = require('backbone.marionette');

var MenuLayout = Marionette.LayoutView.extend({
  template: tetrisLayoutTemplate
});

module.exports = MenuLayout;
