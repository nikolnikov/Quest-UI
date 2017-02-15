var qdPatientProfileContactDirective = require('./patient-profile-contact.directive');
var qdPatientProfileContactController = require('./patient-profile-contact.controller');


angular.module('qd.qz.directives.patient-profile-contact', ['ngMaterial', 'qd.qz.util'])
  .directive('qdPatientProfileContact', qdPatientProfileContactDirective.qdPatientProfileContactDirective)
  .controller('qdPatientProfileContactController', qdPatientProfileContactController.qdPatientProfileContactController);
