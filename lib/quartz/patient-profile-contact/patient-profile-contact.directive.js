'use strict';
var qdPatientProfileContactController = require('./patient-profile-contact.controller');

/**
 * @ngdoc directive
 * @name qdPatientProfileContact
 * @module quartz
 * @restrict E
 * @description
 * `qdPatientProfileContact` is used to display/edit a Patient's contact information.
 * Note: other than the parameters specified the contactData object could contain other fields
 *       that will be passed back on the callback( even if they are not displayed ) 
 * @param {Object} contactData Object specifying the contact and reference.
 * @param {String} contactData.primaryPhone Primary Phone of Patient.
 * @param {String} contactData.primaryPhoneType Mobile/Work/Home.
 * @param {String} contactData.primaryPhoneExtension Primary Phone Extension if primary type is 'Work".
 * @param {String} contactData.secondaryPhone secondary Phone of Patient.
 * @param {String} contactData.secondaryPhoneType Mobile/Work/Home.
 * @param {String} contactData.secondaryPhoneExtension secondary Phone Extension if secondary type is 'Work".
 * @param {String} contactData.email Email of Patient.
 * @param {String} contactData.address1 1st address line of Patient.
 * @param {boolean} contactData.allowSecondAddressLine Allow second line of address.
 * @param {String} contactData.address2 2nd address line.
 * @param {String} contactData.city City part of address.
 * @param {String} contactData.state state part of address.
 * @param {String} contactData.zip zip part of address - validated against zip validator.
 * @param {String} contactData.hid Health Id of Patient.
 * @param {boolean} contactData.labRefIdSettings.Required if labRefIdSetting is required.
 * @param {boolean} contactData.labRefIdSettings.PreventMods Allow or prevent modification to labRefId.
 * @param {String} contactData.labRefId Unique LabRefId.
 * @param {callback} onSaveContactData Callback function to be called when Save is clicked
 * @param {callback} onZipEntryPopulateCityState Callback function to be called when Zip changes should return object with city and state
 * 
 */


function qdPatientProfileContactDirective(){
  var directive = {
      scope: {
          'contactData': '=',
          'onSaveContactData': '&',
          'onZipEntryPopulateCityState' : '&'
      },
      template: require('./patient-profile-contact.html'),
      restrict: 'E',
      bindToController: true,
      controller: qdPatientProfileContactController.qdPatientProfileContactController,
      controllerAs: 'vm'
  };
  return directive;
}

exports.qdPatientProfileContactDirective = qdPatientProfileContactDirective;