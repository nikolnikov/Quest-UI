var qdPatientProfileCardDirective = require('./patient-profile-card.directive');
var qdPatientProfileCardController = require('./patient-profile-card.controller');

angular.module('qd.qz.directives.patient-profile-card', ['ngMaterial'])
    .directive('qdPatientProfileCard', qdPatientProfileCardDirective.qdPatientProfileCardDirective)
    .controller('qdPatientProfileCardController', qdPatientProfileCardController.qdPatientProfileCardController);
