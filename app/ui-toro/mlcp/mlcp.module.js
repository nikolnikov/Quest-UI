var MLCPCtrl = require('./mlcp.ctrl');
var MLCPRoute = require('./mlcp.route');

angular
  .module('app.ui.mlcp', [])
  .controller('MLCPCtrl', MLCPCtrl.MLCPCtrl)
  .config(MLCPRoute.configureRoutes);