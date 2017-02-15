var accountWidgetDirective = require('./account-widget.directive');


angular.module('qd.qz.directives.account-widget', ['ngMaterial'])
  .directive('qdAccountWidget', accountWidgetDirective.qdAccountWidget);