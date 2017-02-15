var qdPatientProfileInsuranceDirective = require('./patient-profile-insurance.directive');
var qdPatientProfileInsuranceController = require('./patient-profile-insurance.controller');


angular.module('qd.qz.directives.patient-profile-insurance', ['ngMaterial', 'qd.qz.util'])
  .directive('qdPatientProfileInsurance', qdPatientProfileInsuranceDirective.qdPatientProfileInsuranceDirective)
  .controller('qdPatientProfileInsuranceController', qdPatientProfileInsuranceController.qdPatientProfileInsuranceController);
