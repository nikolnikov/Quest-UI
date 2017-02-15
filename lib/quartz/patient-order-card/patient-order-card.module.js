var qdPatientOrderCardDirective = require('./patient-order-card.directive');
var qdPatientOrderCardController = require('./patient-order-card.controller');

angular.module('qd.qz.directives.patient-order-card', ['ngMaterial'])
    .directive('qdPatientOrderCard', qdPatientOrderCardDirective.qdPatientOrderCardDirective)
    .controller('qdPatientOrderCardController', qdPatientOrderCardController.qdPatientOrderCardController);
