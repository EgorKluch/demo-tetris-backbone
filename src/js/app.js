var $ = require('jquery');
var Marionette = require('backbone.marionette');

$(document).ready(function () {
  var app = new Marionette.Application();

  app.on('start', function() {
    app.addRegions({
      app: "#app"
    });
  });

  app.start();
});
