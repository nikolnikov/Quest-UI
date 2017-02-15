'use strict';

/**
 * @ngdoc directive
 * @name qdPatientCardFull
 * @module qz.directives.patient-card
 * @restrict E
 * 
 * @description
 * `qdPatientCardFull` displays patient data along with a configurable popup menu
 * that allows to insert actions on the patient card
 * 
 * @param {object} patient Object with discrete patient data
 * @param {string} patient.lastName Last name
 * @param {string} patient.firstName First name
 * @param {string} patient.middleName Middle name of patient
 * @param {string} patient.address Full address, Street, city, st, zip code
 * @param {string} patient.dob Date of birth of patient
 * @param {string} patient.sex gender of patient
 * @param {string} patient.primaryPhone primary phone number of patient
 * 
 * @param {[object]} actionMenuItems Items to be displayed in a popup window
 * 
 * @param {[function]} onActionMenuItemSelected Callback to be invoked when action item is selected
 * 
 */
function patientCardFullDirective() {
  var directive = {
    scope: {
      patient: '=',
      actionMenuItems: '=',
      onActionMenuItemSelected: '&'
    },
    template: require('./patient-card-full.html'),
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

  vm.actionMenuItemSelected = function(item) {
    if ( vm.onActionMenuItemSelected ) {
      vm.onActionMenuItemSelected(item);
    };
  }
}

exports.patientCardFullDirective = patientCardFullDirective;