require('./css/reset.css');

var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Backbone = require('backbone');

var MenuLayout = require('../Layout/TetrisLayout/TetrisLayout');

var Application = Marionette.Application.extend({
  initialize: function () {
    var app = this;

    this.on('start', function() {
      app.addRegions({
        app: "#app"
      });

      var menuLayout = new MenuLayout({
        model: new Backbone.Model({
          name: 'John'
        })
      });
      app.getRegion('app').show(menuLayout);
    });
  }
});

window.app = new Application();

$(document).ready(function () {
  app.start();
});
