'use strict';

/**
 * @ngdoc directive
 * @name qdAccountWidget
 * @module qd.qz.directives.account-widget
 * @restrict E
 * 
 * @description
 * `qdAccountWidget` displays person data along with image. If image is not provided it will show the initial of account holder. 
 * If settings is provided it will navigate to the state provided when clicked.
 * 
 * @param {object} accountInfo Object with discrete account data and base64 Image string
 * @param {string} accountInfo.lastName Last name
 * @param {string} accountInfo.firstName First name
 * @param {string} accountInfo.fullName Full name of person
 * @param {string} accountInfo.orgName default Org Name
 * @param {string} accountInfo.addressLine1  address, Street
 * @param {string} accountInfo.avatarImage base64 Image String
 * 
 * @param {[function]} onSignoutClicked Callback to be invoked when signout is clicked
 * 
 * @param {string} settings route state
 *
 * @param {[function]} onSettingsClicked Callback to be invoked when settings is clicked
 * 
 */


/* @ngInject */
    function qdAccountWidget() {

        var directive = {
            restrict: 'E',
            scope: {},
            bindToController: {
              'accountInfo': '=',
              'onSignoutClicked': '&',
              'settings': '=?',
              'onSettingsClicked': "&?"
            },
            template: require('./account-widget.html'),
            controller: accountWidgetController,
            controllerAs: 'vm'
        };
        return directive;
    }

accountWidgetController.$inject = ['$mdMenu'];

/* @ngInject */
function accountWidgetController( $mdMenu) {
  var vm = this;

  vm.openMenu = function($mdOpenMenu, $mdMenuIsOpen, ev) {
        if ($mdMenu.hide.length !== 0) {
            $mdMenu.hide();
        }

        if (!$mdMenuIsOpen) {
            $mdOpenMenu(ev);
        }
        else {
            $mdMenu.hide();
        }
    };
    
    vm.signoutClicked = function(){
        if(vm.onSignoutClicked){
            vm.onSignoutClicked();
        }
    }
    
    vm.settingsClicked = function(state){
        if(vm.onSettingsClicked){
            vm.onSettingsClicked({state: state});
        }
    }
}

exports.qdAccountWidget = qdAccountWidget;
