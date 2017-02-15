'use strict';

    DialogCtrl.$inject = ['$mdDialog'];
    /* @ngInject */
    function DialogCtrl($mdDialog) {
        var vm = this;

        // DEFINE FUNCTIONS
        vm.cancel = cancel;

        function cancel() {
            $mdDialog.cancel();
        }
    }

exports.DialogCtrl = DialogCtrl;

