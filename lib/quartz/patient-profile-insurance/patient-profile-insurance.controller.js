'use strict';
qdPatientProfileInsuranceController.$inject = ['$log', '$mdDialog'];
/* @ngInject */
function qdPatientProfileInsuranceController($log, $mdDialog) {
  var vm = this;
  vm.activateEditMode = activateEditMode;
  vm.showConfirm = showConfirm;
  vm.cancelEditMode = cancelEditMode;
  vm.billingBeforeEdit = {};
  vm.saveInsurance = saveInsurance;
  vm.validateBilling = validateBilling;
  vm.getCityInfo = getCityInfo;
  vm.unCheckSecondaryPhone = unCheckSecondaryPhone;
  vm.billTypes = 'C,P,T';
  vm.bills = {};
  vm.carrierSearchText = '';
  vm.secondarySearchText = '';
  vm.searchTextChange = searchTextChange;
  vm.carrierQuerySearch = carrierQuerySearch;
  vm.copyPatientAddress = copyPatientAddress;
  vm.formatTelephoneNumber = formatTelephoneNumber;
  vm.hasSearchCallback = false;
  vm.carrierDisplay = carrierDisplay;
  vm.DD = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
           '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  vm.MM = ['01-Jan', '02-Feb', '03-Mar', '04-Apr', '05-May', '06-Jun', '07-Jul', '08-Aug', '09-Sep', '10-Oct', '11-Nov', '12-Dec'];
  vm.YY = [];
  vm.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  vm.sexes = {'M':'Male', 'F':'Female'};
  vm.relations =  { '1':'Self', '2':'Spouse', '8':'Dependent' };
  var states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  init();
  
  function init() {
	  vm.populated=true;
	  vm.editing = false;
	  if( !vm.billingData.states ) {
		  vm.billingData.states = states;
	  }
	  loadAvailableYears();
	  loadBillTypes();
	  if( typeof vm.onSearchCarrier !== 'undefined' && vm.onSearchCarrier !== null) {
		  vm.hasSearchCallback = true;
	  }

  }

  function loadBillTypes() {
	  var allBillTypes = {'T':'Insurance', 'C':'Client Bill', 'P':'Patient Bill'};
	  var aryBillTypes = vm.billTypes.split(',');
	  for (var i = 0;i < aryBillTypes.length; i++) {
		  vm.bills[aryBillTypes[i]] = allBillTypes[aryBillTypes[i]];
	  }
  }

  function loadAvailableYears() {
	  var yearStart, yearEnd, i;
	  yearEnd = new Date().getFullYear();
	  yearStart = yearEnd - 135;

	  for (i = yearEnd; i >= yearStart; i--) {
		  vm.YY.push(i);
	  }
  }

  
  function copyPatientAddress(checked, guarantorObj) {
	  if ((angular.isUndefined(checked) || (checked === false)) && (!angular.isUndefinedOrNull(vm.patientAddress))) {
		  guarantorObj.address.line1 = vm.patientAddress.line1;
		  guarantorObj.address.line2 = vm.patientAddress.line2;
		  guarantorObj.address.city = vm.patientAddress.city;
		  guarantorObj.address.state = vm.patientAddress.state;
		  guarantorObj.address.zip = vm.patientAddress.zip;
	  }
  }


  function getCityInfo(zip, bd) {
	  if( !angular.isUndefinedOrNull(zip) && zip.length > 0) {
		  if(!angular.isUndefinedOrNull(vm.onZipEntryPopulateCityState)) {
			  var cityInfo = vm.onZipEntryPopulateCityState({zip: zip});
			  if( cityInfo && cityInfo.city && cityInfo.state ) {
				  bd.state = cityInfo.state;
				  bd.city = cityInfo.city;
			  }
		  }
	  }
  }

  function activateEditMode() {
	  angular.copy(vm.billingData, vm.billingBeforeEdit);
	  vm.editMode = vm.editing = vm.populated = true;
  }

  function cancelEditMode(formName) {
	  vm.editMode = vm.editing = false;
	  formName.$setPristine();
  }

  function showConfirm(ev, parent, formName) {
	  var confirm;
	  confirm = $mdDialog.confirm()
	  .title('Discard changes')
	  .textContent('Any changes you have made will not be saved')
	  .targetEvent(ev)
	  .ok('Ok')
	  .cancel('Cancel');
	  $mdDialog.show(confirm).then(function() {
		  angular.copy(vm.billingBeforeEdit, vm.billingData);
		  vm.billingBeforeEdit ={};
		  vm.cancelEditMode(formName);
	  });
  }
  
  function saveInsurance(billingData) {
	  vm.editMode = vm.editing = false;
	  // do some cleanup before calling the callback
	  if (vm.billingData.primaryGuarantor.phone === '') {
		  vm.billingData.primaryGuarantor.phoneType = '';
	  }
	  else if (vm.billingData.primaryGuarantor.phoneType === '') {
		  vm.billingData.primaryGuarantor.phoneType = 'Home';
	  }
	  if (vm.billingData.primaryGuarantor.phoneType !== 'Mobile') {
		  vm.billingData.primaryGuarantor.smsNotifications = false;
	}
	  if (vm.billingData.primaryGuarantor.phoneType !== 'Work') {
		  vm.billingData.primaryGuarantor.phoneExtension = '';
	  }

	  if (vm.billingData.secondaryGuarantor.phone === '') {
		  vm.billingData.secondaryGuarantor.phoneType = '';
	  }
	  else if (vm.billingData.secondaryGuarantor.phoneType === '') {
		  if (vm.billingData.secondaryGuarantor.phoneType === 'Home') {
			  vm.billingData.secondaryGuarantor.phoneType = 'Mobile';
		  }
		  else {
			  vm.billingData.secondaryGuarantor.phoneType = 'Home';
		  }
	  }
	  if (vm.billingData.secondaryGuarantor.phoneType !== 'Mobile') {
		  vm.billingData.secondaryGuarantor.smsNotifications = false;
	  }
	  if (vm.billingData.secondaryGuarantor.phoneType !== 'Work') {
		  vm.billingData.secondaryGuarantor.phoneExtension = '';
	  }


	  if( typeof vm.onSaveInsuranceData !== 'undefined' && vm.onSaveInsuranceData !== null) {
		  vm.onSaveInsuranceData(billingData);
	  }
  }
  
  function carrierQuerySearch(qry) {
	  var results = [];
	  if( !angular.isUndefinedOrNull(qry) && qry.length > 0) {
		  if(!angular.isUndefinedOrNull(vm.onSearchCarrier)) {
			  results = vm.onSearchCarrier({query: qry});
		  }
	  }
	  
	  return results;
  }

  
  function unCheckSecondaryPhone(event, phoneType) {
      if (vm.billingData.secondaryPhoneType === phoneType) {
        vm.billingData.secondaryPhoneType = '';
      }
    }
  
  function searchTextChange(query) {
	  var $dropdown = angular.element(document.querySelector('.qd-autocomplete-suggestions'));

	  if (query) {
		  $dropdown.addClass('qd-autocomplete-suggestions--search');
	  }
	  else {
		  $dropdown.removeClass('qd-autocomplete-suggestions--search');
	  }
  }
  
  function carrierDisplay(insName, insCode) {
	  var returnValue;
	  returnValue = ' ';
	  if ((angular.isDefined(insCode)) && (insCode !== '')) {
		  returnValue = insName + ' (' + insCode + ')';
	  }
	  return returnValue;
  }

  function validateBilling(formName) {
      var disableForm, secondarySearchText;

      disableForm = false;
      if (vm.billingData.primaryGuarantor) {
    	  if (vm.billingData.primaryGuarantor.billType === 'T') {
    		  if (vm.billingData.primaryGuarantor && vm.billingData.primaryGuarantor.insurance) {
    			  if (vm.carrierSearchText !== ' ' && vm.carrierSearchText !== '' && (angular.isUndefined(vm.billingData.primaryGuarantor.insurance.carrier) || vm.billingData.primaryGuarantor.insurance.carrier === null) || (vm.billingData.primaryGuarantor.insurance.carrier && (angular.isUndefined(vm.billingData.primaryGuarantor.insurance.carrier.insCode) || vm.billingData.primaryGuarantor.insurance.carrier.insCode === null))) {
    				  disableForm = true;
    			  }
    		  }
    		  if (vm.billingData.allowSecondaryInsurance) {
    			  if (vm.billingData.secondaryGuarantor && vm.billingData.secondaryGuarantor.insurance) {
    				  secondarySearchText = vm.secondarySearchText;
    				  if (secondarySearchText) secondarySearchText = secondarySearchText.trim();
    				  if (secondarySearchText !== '') {
    					  if (vm.billingData.secondaryGuarantor.insurance.carrier) {
    						  if (vm.billingData.secondaryGuarantor.insurance.carrier.insCode !== '' || angular.isDefined(vm.billingData.secondaryGuarantor.insurance.carrier.insCode) || vm.billingData.secondaryGuarantor.insurance.carrier.insCode !== null) {
    							  if (vm.billingData.secondaryGuarantor.relationship === '') {
    								  disableForm = true;
    							  }
    						  }
    					  }
    					  else {
    						  disableForm = true;
    					  }
    				  }
    			  }
    		  }
    	  }
      }
      if (formName) {
        disableForm = !formName.$valid || disableForm;
      }
      return disableForm;
    }

  function formatTelephoneNumber(tel, ctrlName, ctrlObj) {
	  if (angular.isUndefined(tel) || tel === '') {
		  return;
	  }
	  ctrlObj[ctrlName] = commonFormatTelephoneNumber(tel);
  }
  
  function commonFormatTelephoneNumber(tel) {
	  var value, city, area, number, country;
	  country = '';
	  if (angular.isUndefined(tel) || tel === '') {
		  return '';
	  }

	  value = tel.toString().trim().replace(/^\+/, '');
	  value = value.replace(' ','').replace('(','').replace(')','').replace('-','');

	  if (value.match(/[^0-9]/)) {
		  return tel;
	  }

	  switch (value.length) {
	  case 10: // +1PPP####### -> C (PPP) ###-####
		  country = 1;
		  city = value.slice(0, 3);
		  area = value.slice(3,6);
		  number = value.slice(6);
		  break;

	  case 11: // +CPPP####### -> CCC (PP) ###-####
		  country = value[0];
		  city = value.slice(1, 4);
		  area = value.slice(4, 7);
		  number = value.slice(7);
		  break;

	  case 12: // +CCCPP####### -> CCC (PP) ###-####
		  country = value.slice(0, 3);
		  city = value.slice(3, 5);
		  area = value.slice(5, 8);
		  number = value.slice(8);
		  break;

	  default:
		  return tel;
	  }
	  if (country === 1) {
		  country = '';
	  }

	  tel = country + '(' + city + ') ' + area + '-' + number;
	  return tel;
  }

}

exports.qdPatientProfileInsuranceController = qdPatientProfileInsuranceController;

