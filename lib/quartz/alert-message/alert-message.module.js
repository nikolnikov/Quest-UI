var alertMessage = require('./alert-message.directive');

angular.module('qd.qz.directives.alert-message', [])
  .directive('qdAlertMessage', alertMessage.qdAlertMessage);
