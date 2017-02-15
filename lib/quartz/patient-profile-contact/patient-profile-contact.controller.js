'use strict';
qdPatientProfileContactController.$inject = ['$log', '$mdDialog', 'qzUtil'];
/* @ngInject */
function qdPatientProfileContactController($log, $mdDialog, qzUtil) {
  var vm = this;
  vm.activateEditMode = activateEditMode;
  vm.showConfirm = showConfirm;
  vm.cancelEditMode = cancelEditMode;
  vm.contactBeforeEdit = {};
  vm.saveContact = saveContact;
  vm.getCityInfo = getCityInfo;
  vm.unCheckSecondaryPhone = unCheckSecondaryPhone;
  var states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  init();
  
  function init() {
	  vm.populated=true;
	  vm.editing = false;
	  if( !vm.contactData.states ) {
		  vm.contactData.states = states;
	  }
  }

  function getCityInfo() {
	  if( !qzUtil.isUndefinedOrNull(vm.contactData.zip) && vm.contactData.zip.length > 0) {
		  if(!qzUtil.isUndefinedOrNull(vm.onZipEntryPopulateCityState)) {
			  var cityInfo = vm.onZipEntryPopulateCityState({zip: vm.contactData.zip});
			  if( cityInfo && cityInfo.city && cityInfo.state ) {
				  vm.contactData.state = cityInfo.state;
				  vm.contactData.city = cityInfo.city;
			  }
		  }
	  }
  }

  function activateEditMode() {
	  angular.copy(vm.contactData, vm.contactBeforeEdit);
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
		  angular.copy(vm.contactBeforeEdit, vm.contactData);
		  vm.contactBeforeEdit ={};
		  vm.cancelEditMode(formName);
	  });
  }
  
  function saveContact(contactData) {
	  vm.editMode = vm.editing = false;
	  // do some cleanup before calling the callback
	  if (vm.contactData.primaryPhone === '') {
		  vm.contactData.primaryPhoneType = '';
	  }
	  else if (vm.contactData.primaryPhoneType === '') {
		  vm.contactData.primaryPhoneType = 'Home';
	  }
	  if (vm.contactData.primaryPhoneType !== 'Mobile') {vm.contactData.primarySmsNotifications = false;}
	  if (vm.contactData.primaryPhoneType !== 'Work') {vm.contactData.primaryPhoneExtension = '';}

	  if (vm.contactData.secondaryPhone === '') {
		  vm.contactData.secondaryPhoneType = '';
	  }
	  else if (vm.contactData.secondaryPhoneType === '') {
		  if (vm.contactData.primaryPhoneType === 'Home') {
			  vm.contactData.secondaryPhoneType = 'Mobile';
		  }
		  else {
			  vm.contactData.secondaryPhoneType = 'Home';
		  }
	  }
	  if (vm.contactData.secondaryPhoneType !== 'Mobile') {vm.contactData.secondarySmsNotifications = false;}
	  if (vm.contactData.secondaryPhoneType !== 'Work') {vm.contactData.secondaryPhoneExtension = '';}


	  if( vm.onSaveContactData ) {
		  vm.onSaveContactData(contactData);
	  }
  }
  
  function unCheckSecondaryPhone(event, phoneType) {
      if (vm.contactData.secondaryPhoneType === phoneType) {
        vm.contactData.secondaryPhoneType = '';
      }
    }
}

exports.qdPatientProfileContactController = qdPatientProfileContactController;

