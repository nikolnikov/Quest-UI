var homeCtrl = require('./home.ctrl');
var homeRoute = require('./home.route');

angular
  .module('app.ui.home', [])
  .controller('HomeCtrl', homeCtrl.HomeCtrl)
  .config(homeRoute.configureRoutes);
