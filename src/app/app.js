'use strict';

require('./css/reset.css');

var $ = require('jquery');
var Marionette = require('backbone.marionette');

var TetrisLayout = require('../Tetris/TetrisLayout');
var Tetris = require('../Tetris/Model/TetrisModel');

var Application = Marionette.Application.extend({
  initialize: function () {
    var app = this;
    app.$document = $(document);

    this.on('start', function() {
      app.addRegions({
        app: "#app"
      });

      var tetrisLayout = new TetrisLayout({
        model: new Tetris()
      });
      app.getRegion('app').show(tetrisLayout);
    });
  }
});

window.app = new Application();

$(document).ready(function () {
  app.start();
});
