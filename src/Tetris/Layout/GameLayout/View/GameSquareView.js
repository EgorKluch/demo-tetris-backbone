'use strict';

require('../css/GameSquareView.css');

var Marionette = require('backbone.marionette');

var gameSquarTemplate = require('../tpl/GameSquareView.twig');

var GameSquareView = Marionette.ItemView.extend({
  name: 'GameSquareView',
  template: gameSquarTemplate
});

module.exports = GameSquareView;
