var errorCtrl = require('./error.ctrl');
var errorRoute = require('./error.route');

angular
  .module('app.ui.error', [])
  .controller('ErrorCtrl', errorCtrl.ErrorCtrl)
  .config(errorRoute.configureRoutes);