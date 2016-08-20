require('../css/HighScoreView.css');

var Marionette = require('backbone.marionette');

var HighScoreViewTemplate = require('../tpl/HighScoreView.twig');

var HighScoreView = Marionette.ItemView.extend({
  name: 'HighScoreView',

  template: HighScoreViewTemplate
});

module.exports = HighScoreView;
