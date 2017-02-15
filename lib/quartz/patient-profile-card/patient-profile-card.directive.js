'use strict';

/**
 * @ngdoc directive
 * @name qdPatientProfileCard
 * @module qz.directives.patient-profile-card
 * @restrict E
 * @description
 * `qdPatientProfileCardDirective` is used to display a patient profile card.
 * Note: when the editable field is enabled and then initialized within the card, inputs are modifiable based on parameters.
 * @param {Object} patient Object specifying the patient.
 * @param {number} patient.pid The id of the patient.
 * @param {string} patient.lastName The last name of the patient.
 * @param {string} patient.firstName The first name of the patient.
 * @param {string} patient.middleName The middle name of the patient.
 * @param {date} patient.dob The dob of the patient.
 * @param {string} patient.ssn The ssn of the patient.
 * @param {string} patient.primaryPhone The primaryPhone of the patient.
 * @param {string} patient.sex The sex of the patient.
 * @param {Object=default} hiddenFields Object specifying which patient fields to hide from the display view of the card. <strong>Optional;</strong> if not specified, default rules apply.
 * @param {boolean} hiddenFields.ssn hide the ssn display field of the patient.
 * @param {boolean} hiddenFields.pid hide the pid display field of the patient.
 * @param {boolean} hiddenFields.dob hide the dob display field of the patient.
 * @param {boolean} hiddenFields.primaryPhone hide the primaryPhone display field of the patient.
 * @param {boolean} hiddenFields.sex hide the sex display field of the patient.
 * @param {Object=default} disabledFields Object specifying which patient fields to disable from the edit view of the card. <strong>Optional;</strong> if not specified, default rules apply.
 * @param {boolean} disabledFields.ssn disable the ssn edit field of the patient-profile edit form.
 * @param {boolean} disabledFields.pid disable the patient id edit field of the patient-profile edit form.
 * @param {boolean} disabledFields.dob disable the dob edit field of the patient-profile edit form.
 * @param {boolean} disabledFields.lastName disable the lastName edit field of the patient-profile edit form.
 * @param {boolean} disabledFields.firstName disable the firstName edit field of the patient-profile edit form.
 * @param {boolean} disabledFields.middleName disable the middleName edit field of the patient-profile edit form.
 * @param {boolean=false} editable specify if the user can activate the edit function of the card. <strong>Optional;</strong> if not specified, default rules apply.
 * @param {callback} onSavePatientInfo Callback function to be called when the SAVE button is clicked within the editable region of the patient profile card.
 *
 */
function qdPatientProfileCardDirective(){
  var directive = {
    scope: {
      'patient': '=',
      'hiddenFields': '=?',
      'disabledFields': '=?',
      'editable': '=?',
      'onSavePatientInfo': '&'
    },
    template: require('./patient-profile-card.html'),
    restrict: 'E',
    bindToController: true,
    controller: 'qdPatientProfileCardController',
    controllerAs: 'vm'
  };
  return directive;
}

exports.qdPatientProfileCardDirective = qdPatientProfileCardDirective;