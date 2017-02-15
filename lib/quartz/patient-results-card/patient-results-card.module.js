var qdPatientResultsCardDirective = require('./patient-results-card.directive');
var qdPatientResultsCardController = require('./patient-results-card.controller');


angular.module('qd.qz.directives.patient-results-card', ['ngMaterial', 'qd.qz.util'])
  .directive('qdPatientResultsCard', qdPatientResultsCardDirective.qdPatientResultsCardDirective)
  .controller('qdPatientResultsCardController', qdPatientResultsCardController.qdPatientResultsCardController);
