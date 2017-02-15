var statusBarsDirective = require('./status-bars.directive');

angular.module('qd.qz.directives.status-bars', [])
  .directive('qdStatusBars', statusBarsDirective.statusBarsDirective);