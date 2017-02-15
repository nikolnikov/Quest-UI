var qdPatientProfileHeaderDirective = require('./patient-profile-header.directive');
var qdPatientProfileHeaderController = require('./patient-profile-header.controller');

angular.module('qd.qz.directives.patient-profile-header', ['ngMaterial'])
    .directive('qdPatientProfileHeader', qdPatientProfileHeaderDirective.qdPatientProfileHeaderDirective)
    .controller('qdPatientProfileHeaderController', qdPatientProfileHeaderController.qdPatientProfileHeaderController);
