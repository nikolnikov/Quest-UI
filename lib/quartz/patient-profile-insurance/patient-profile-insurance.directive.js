'use strict';
var qdPatientProfileInsuranceController = require('./patient-profile-insurance.controller');

/**
 * @ngdoc directive
 * @name qdPatientProfileInsurance
 * @module quartz
 * @restrict E
 * @description
 * `qdPatientProfileInsurance` is used to display/edit a Patient's billing information.
 * Note: other than the parameters specified the billingData object could contain other fields
 *       that will be passed back on the callback( even if they are not displayed ) 
 * @param {Object} billingData Object specifying the Insurance information.
 * @param {String} billingData.allowSecondaryInsurance boolean default is false
 * @param {String} billingData.primaryInsurancePhone String phone number for PrimaryInsurance
 * @param {String} billingData.primaryGuarantor Object Specifying primaryGuarantor for insurance
 * @param {String} billingData.primaryGuarantor.billType String T/P/C - indicating Insurance/Patient/Client
 * @param {String} billingData.primaryGuarantor.relationship String 1-self, 2-spouse, 8-dependent
 * @param {String} billingData.primaryGuarantor.Insurance Object Specifying primaryGuarantor Insurance information
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceId String  Unique Id
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceGroup String Group number for primary guarantor
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceAddress Object  primary guarantor insurance address
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceAddress.line1 String 
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceAddress.line2 String 
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceAddress.city String 
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceAddress.State String 
 * @param {String} billingData.primaryGuarantor.Insurance.insuranceAddress.Zip String 
 * @param {String} billingData.primaryGuarantor.Insurance.carrier Object  PrimaryGuarantor carrier information
 * @param {String} billingData.primaryGuarantor.Insurance.carrier.insName String Insurance Name 
 * @param {String} billingData.primaryGuarantor.Insurance.carrier.insCode String Insurance Code 
 * @param {String} billingData.primaryGuarantor.copyPatientAddress boolean a Patient address object needs to passed if true
 * @param {String} billingData.primaryGuarantor.lastName String  Last Name of primary Guarantor
 * @param {String} billingData.primaryGuarantor.firstName String First Name of primary Guarantor
 * @param {String} billingData.primaryGuarantor.middleName String Middle Name of primary Guarantor
 * @param {String} billingData.primaryGuarantor.dob String dob of primary Guarantor
 * @param {String} billingData.primaryGuarantor.dobMonth String  dobMonth of primary Guarantor ( formated as '07-Jul' )
 * @param {String} billingData.primaryGuarantor.dobDay String dobDay of primary Guarantor
 * @param {String} billingData.primaryGuarantor.dobYear String  dobYear of primary Guarantor
 * @param {String} billingData.primaryGuarantor.Sex Char  sex of primary Guarantor 'M' or 'F'
 * @param {String} billingData.primaryGuarantor.phone String phone of primary Guarantor
 * @param {String} billingData.primaryGuarantor.phoneType String  phone Type of primary Guarantor 'Mobile', 'Home' or 'Work'
 * @param {String} billingData.primaryGuarantor.phoneExtension String if phone type 'Work'
 * @param {String} billingData.primaryGuarantor.address Object  primary guarantor address
 * @param {String} billingData.primaryGuarantor.address.line1 String primary guarantor address line1
 * @param {String} billingData.primaryGuarantor.address.line2 String primary guarantor address line2
 * @param {String} billingData.primaryGuarantor.address.city String primary guarantor address city
 * @param {String} billingData.primaryGuarantor.address.State String primary guarantor address state
 * @param {String} billingData.primaryGuarantor.address.Zip String primary guarantor address Zip
 * @param {String} billingData.secondaryGuarantor Object Specifying secondaryGuarantor for insurance
 * @param {String} billingData.secondaryGuarantorr.relationship String 1-self, 2-spouse, 8-dependent
 * @param {String} billingData.secondaryGuarantor.Insurance Object Specifying secondaryGuarantor Insurance information
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceId String  Unique Id
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceGroup String Group number for secondary guarantor
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceAddress Object  secondary guarantor insurance address
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceAddress.line1 String secondary guarantor insurance address line1
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceAddress.line2 String secondary guarantor insurance address line2
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceAddress.city String secondary guarantor insurance address city
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceAddress.State String secondary guarantor insurance address state
 * @param {String} billingData.secondaryGuarantor.Insurance.insuranceAddress.Zip String secondary guarantor insurance address Zip
 * @param {String} billingData.secondaryGuarantor.Insurance.carrier Object  SecondaryGuarantor carrier information
 * @param {String} billingData.secondaryGuarantor.Insurance.carrier.insName String Insurance Name 
 * @param {String} billingData.secondaryGuarantor.Insurance.carrier.insCode String Insurance Code 
 * @param {String} billingData.secondaryGuarantor.copyPatientAddress boolean a Patient address object needs to passed if true
 * @param {String} billingData.secondaryGuarantor.lastName String  Last Name of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.firstName String First Name of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.middleName String Middle Name of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.dob String Last dob of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.dobMonth String dob Month of secondary Guarantor in format 'Jul-07'
 * @param {String} billingData.secondaryGuarantor.dobDay String dob Day of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.dobYear String dob Year of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.Sex Char  'M' or 'F' Sex of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.phone String Phone number of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.phoneType String Phone Type of secondary Guarantor - 'Mobile', 'Home' or 'Work' 
 * @param {String} billingData.secondaryGuarantor.phoneExtension String if phone type 'Work' phone extension of secondary Guarantor
 * @param {String} billingData.secondaryGuarantor.address Object  secondary guarantor address
 * @param {String} billingData.secondaryGuarantor.address.line1 String secondary guarantor address line1
 * @param {String} billingData.secondaryGuarantor.address.line2 String secondary guarantor address line2
 * @param {String} billingData.secondaryGuarantor.address.city String secondary guarantor address city
 * @param {String} billingData.secondaryGuarantor.address.State String secondary guarantor address state
 * @param {String} billingData.secondaryGuarantor.address.Zip String secondary guarantor address Zip
 * @param {String} patientAddress  Object Sent in if we need to copy patients address to primary/secondary data
 * @param {String} patientAddress.address.line1 String patient address line1
 * @param {String} patientAddress.address.line2 String patient address line2
 * @param {String} patientAddress.address.city String patient address city
 * @param {String} patientAddress.address.state String patient address state
 * @param {String} patientAddress.address.zip String patient address zip
 * @param {callback} onSaveInsuranceData Callback function to be called when Save is clicked - billingData is passed in
 * @param {callback} onSearchCarrier Callback function for carrier search autoComplete returns array of {insName:, insCode:}
 * @param {callback} onZipEntryPopulateCityState Callback function to be called when Zip changes should return object with city and state
 * 
 */


function qdPatientProfileInsuranceDirective(){
  var directive = {
      scope: {
          'billingData': '=',
          'patientAddress': '=',
          'onSaveInsuranceData': '&?',
          'onSearchCarrier': '&?',
          'onZipEntryPopulateCityState' : '&?'
      },
      template: require('./patient-profile-insurance.html'),
      restrict: 'E',
      bindToController: true,
      controller: qdPatientProfileInsuranceController.qdPatientProfileInsuranceController,
      controllerAs: 'vm'
  };
  return directive;
}

exports.qdPatientProfileInsuranceDirective = qdPatientProfileInsuranceDirective;