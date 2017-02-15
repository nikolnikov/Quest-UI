'use strict';

/**
 * @ngdoc directive
 * @name qdPatientCardMini
 * @module qz.directives.patient-card
 * @restrict E
 * 
 * @description
 * `qdPatientCardMini` displays patient data along with an qd-icon
 * 
 * @param {object} patient Object with discrete patient data
 * @param {string} patient.lastName Last name
 * @param {string} patient.firstName First name
 * @param {string} patient.middleName Middle name of patient
 * @param {string} patient.dob Date of birth of patient
 * @param {string} patient.sex gender of patient
 * 
 * @param {string} iconClass name of qd-icon to display
 * 
 */
function patientCardMiniDirective() {
  var directive = {
    scope: {
      patient: '=',
      iconClass: '='
    },
    template: require('./patient-card-mini.html'),
    restrict: 'E',
    transclude: true,
    bindToController: true,
    controller: Controller,
    controllerAs: 'vm'
  };
  return directive;
}

function Controller() {
  var vm = this;
}

exports.patientCardMiniDirective = patientCardMiniDirective;