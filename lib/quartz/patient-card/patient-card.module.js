var patientCardMiniDirective = require('./patient-card-mini.directive');
var patientCardFullDirective = require('./patient-card-full.directive');


angular.module('qd.qz.directives.patient-card', [])
  .directive('qdPatientCardMini', patientCardMiniDirective.patientCardMiniDirective)
  .directive('qdPatientCardFull', patientCardFullDirective.patientCardFullDirective);