var redditCtrl = require('./reddit.ctrl');
var redditRoute = require('./reddit.route');

angular
  .module('app.ui.reddit', [])
  .controller('RedditCtrl', redditCtrl.RedditCtrl)
  .config(redditRoute.configureRoutes);