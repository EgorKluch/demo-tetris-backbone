'use strict';

require('./css/reset.css');

var $ = require('jquery');
var Marionette = require('backbone.marionette');

var TetrisLayout = require('../Tetris/Layout/TetrisLayout/TetrisLayout');
var TetrisGameModel = require('../Tetris/Model/GameModel');

var Application = Marionette.Application.extend({
  initialize: function () {
    var app = this;
    app.$document = $(document);

    this.on('start', function() {
      app.addRegions({
        app: "#app"
      });

      var tetrisLayout = new TetrisLayout({
        model: new TetrisGameModel()
      });
      app.getRegion('app').show(tetrisLayout);
    });
  }
});

window.app = new Application();

$(document).ready(function () {
  app.start();
});
