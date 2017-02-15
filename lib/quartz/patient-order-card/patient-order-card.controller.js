'use strict';
qdPatientOrderCardController.$inject = ['$log', '$mdDialog', '$mdMedia'];
/* @ngInject */
function qdPatientOrderCardController($log, $mdDialog, $mdMedia) {
    var vm = this;

    // DEFINE INTERNAL FUNCTIONS
    vm.progressStatusBars = progressStatusBars;
    vm.progressStatusText = progressStatusText;
    vm.printReq = printReq;
    vm.printLabel = printLabel;

    // DEFINE CALLBACK FUNCTIONS
    vm.orderCardClicked = orderCardClicked;
    vm.actionMenuItemSelected = actionMenuItemSelected;

    vm.openMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };

    function progressStatusBars() {
        if(vm.order && vm.order.progress) {
            if (vm.order.progress == 'pending') {
                return 1;
            }
            else if (vm.order.progress == 'accessioned') {
                return 1;
            }
            else if (vm.order.progress == 'received') {
                return 2;
            }
            else if (vm.order.progress == 'partial') {
                return 3;
            }
            else if (vm.order.progress == 'final') {
                return 4;
            }
            else if (vm.order.progress == 'cancelled') {
                return 2;
            }
            //On hold
            return 1;
        }
    }

    function progressStatusText() {
        var changed = '';

        if (vm.order.progressChanged != '') {
            changed = ' on ' + vm.order.progressChanged;
        }

        if (vm.order.progress == 'pending') {
            return 'Pending' + changed;
        }
        else if (vm.order.progress == 'onhold') {
            return 'On Hold' + changed;
        }
        else if (vm.order.progress == 'Draft') {
            return 'Draft' + changed;
        }
        else if (vm.order.progress == 'accessioned') {
            return 'Accessioned' + changed;
        }
        else if (vm.order.progress == 'received') {
            return 'Received' + changed;
        }
        else if (vm.order.progress == 'partial') {
            return 'Partial Reported' + changed;
        }
        else if (vm.order.progress == 'final') {
            return 'Final Reported' + changed;
        }
        else if (vm.order.progress == 'cancelled') {
            return 'Cancelled' + changed;
        }

        return 'On Hold';
    }

    function orderCardClicked(order) {
        if (vm.onOrderCardClicked) {
            vm.onOrderCardClicked({order: order});
        }
    }

    function actionMenuItemSelected(actionMenuItem) {
        if (vm.onActionMenuItemSelected) {
            vm.onActionMenuItemSelected({actionMenuItem: actionMenuItem});
        }
    }

    function printReq(patientOID, patientOrderOIDs) {
        //Print Req request needs to call callback function to trigger service
        var actionMenuItem = {
            id: '1',
            text: 'Print Req',
            requestAction: 'printReq',
            requestData: {
                'patientOID' : patientOID,
                'patientOrderOIDs' : patientOrderOIDs
            }
        };
        actionMenuItemSelected(actionMenuItem);
    }

    /* @TODO: reprintLabel is still in development at the time of this writing,
        so these are just stubs that are subject that won't be finalized.
     */
    function printLabel() {
        //Print Req request needs to call callback function to trigger service
        var actionMenuItem = {
            id: '2',
            text: 'Print Label',
            requestAction: 'printLabel',
            requestData: {
                'labelText' : 'Feature still in development'
            }
        };
        actionMenuItemSelected(actionMenuItem);
    }

}

exports.qdPatientOrderCardController = qdPatientOrderCardController;

