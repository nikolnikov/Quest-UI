'use strict';
qdPatientProfileHeaderController.$inject = ['$log', '$mdDialog', '$mdMedia'];
/* @ngInject */
function qdPatientProfileHeaderController($log, $mdDialog, $mdMedia) {
    var vm = this;

    // DEFINE FUNCTIONS
    vm.activateEditMode = activateEditMode;
    vm.cancelEditMode = cancelEditMode;
    vm.savePatientInfo = savePatientInfo;
    vm.showConfirmCancel = showConfirmCancel;

    // DEFINE INTERNAL VARIABLES
    vm.editMode = false;
    vm.patientBeforeEdit = {};
    vm.patientAfterEdit = {};
    vm.patientFormData = {};

    // DEFINE DEFAULT DIRECTIVE IF UNSPECIFIED
    vm.hiddenFields = {};
    vm.disabledFields = {};

    // DEFINE STATIC COLLECTIONS/OBJECTS
    vm.formData = { DD: [], MM: [], YY: [], months: [], sexes: []};
    vm.formData.DD = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    vm.formData.MM = ['01-Jan', '02-Feb', '03-Mar', '04-Apr', '05-May', '06-Jun', '07-Jul', '08-Aug', '09-Sep', '10-Oct', '11-Nov', '12-Dec'];
    vm.formData.YY = [];
    vm.formData.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    vm.formData.sexes = {'M':'Male', 'F':'Female'};

    // INITIALIZE CONTROLLER
    init();

    // IMPLEMENT FUNCTIONS
    function init() {
        processPatientData();
    }

    function processPatientData() { //default business rules, unless overridden by directive
        var displayRulesEmpty = angular.equals({}, vm.hiddenFields);
        var disabledFieldsEmpty = angular.equals({}, vm.disabledFields);
        if (displayRulesEmpty) {
            if (vm.patient.pid) {
                vm.hiddenFields.pid = false;
                vm.hiddenFields.ssn = true;
            } else if (vm.patient.ssn) {
                vm.hiddenFields.ssn = false;
                vm.hiddenFields.pid = true;
            } else {
                vm.hiddenFields.ssn = true;
                vm.hiddenFields.pid = true;
            }
        }
        if (disabledFieldsEmpty) {
            vm.disabledFields.ssn = true;
            vm.disabledFields.pid = true;
            vm.disabledFields.dob = true;
            vm.disabledFields.firstName = true;
            vm.disabledFields.middleName = true;
            vm.disabledFields.lastName = true;
            vm.disabledFields.sex = true;
        }
    }

    function formatPatientFormData() {
        var dob = [0,0,0];
        if (vm.patient.dob) {
            dob = vm.patient.dob.split('/');
        }
        vm.patientFormData.MM = vm.formData.MM[Number(dob[0]-1)];
        vm.patientFormData.DD = dob[1];
        vm.patientFormData.YY = dob[2];
    }

    function formatISODate(mm, dd, yy) {
        return '' + mm.substring(0, 2) + '/' + dd + '/' +  yy;
    }

    function loadAvailableYears() {
        var yearStart, yearEnd, i;
        yearEnd = new Date().getFullYear();
        yearStart = yearEnd - 135;

        for (i = yearEnd; i >= yearStart; i--) {
            vm.formData.YY.push(i);
        }
    }

    function activateEditMode() {
        vm.patientFormData.MM = {};
        vm.patientFormData.DD = {};
        vm.patientFormData.YY = {};
        formatPatientFormData();
        loadAvailableYears();
        angular.copy(vm.patient, vm.patientBeforeEdit);
        vm.editMode = true;
    }

    function cancelEditMode() {
        vm.editMode = false;
    }

    function showConfirmCancel(ev) {
        var confirm;
        confirm = $mdDialog.confirm()
            .title('Discard changes')
            .textContent('Any changes you have made will not be saved')
            .targetEvent(ev)
            .ok('Ok')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            angular.copy(vm.patientBeforeEdit, vm.patient);
            vm.patientBeforeEdit ={};
            vm.cancelEditMode();
        });
    }

    function savePatientInfo() {
        angular.copy(vm.patient, vm.patientAfterEdit);
        vm.patientAfterEdit.dob = formatISODate(vm.patientFormData.MM, vm.patientFormData.DD, vm.patientFormData.YY);
        if (vm.onSavePatientInfo) {
            vm.onSavePatientInfo({patientAfterEdit: vm.patientAfterEdit});
        }
        vm.editMode = false;
    }
}

exports.qdPatientProfileHeaderController = qdPatientProfileHeaderController;

