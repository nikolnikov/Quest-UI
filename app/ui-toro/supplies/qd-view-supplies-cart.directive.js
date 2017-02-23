function qdViewSuppliesCart() {
  //Usage:
  var directive = {
      scope: {
        'supplies': '='
      },
      restrict: 'EA',
      templateUrl: 'app/ui-toro/supplies/qd-view-supplies-cart.html',
      controller: qdViewSuppliesCartCtrl,
      controllerAs: 'vm'
  };
  return directive;
}

qdViewSuppliesCartCtrl.$inject = ['$scope','$log', '$mdDialog'];

/* @ngInject */
function qdViewSuppliesCartCtrl($scope, $log, $mdDialog) {

  var vm = this;
  
  vm.practice = {
    mason: {
      name: "ABC Practice",
      address: "2100 Example Street",
      address2: "",
      city: "Mason",
      state: "OH",
      zip: "45421"
    },
    
    cincinnati: {
      name: "ABC Practice",
      address: "1500 Default Rd",
      address2: "",
      city: "Cincinnati",
      state: "OH",
      zip: "44444"
    }
  };
  
  vm.populateAddress = true;
  vm.editAddressIcon = true;
  vm.editReoccurranceIcon = true;
  vm.populateReoccurrance = true;
  vm.editEmailIcon = true;
  vm.populateEmail = true;
  vm.reoccurranceWeeklyOptions = true;
  
  vm.editSuppliesAddress = function(){
    vm.editAddress = true;
    vm.editAddressTitle = true;
    vm.editAddressSave = true;
    vm.editAddressIcon = false;
    vm.populateAddress = false;
  };
  
  vm.cancelSuppliesAddress = function(){
    vm.editAddress = false;
    vm.editAddressTitle = false;
    vm.editAddressSave = false;
    vm.editAddressIcon = true;
    vm.populateAddress = true;
  };
  
  vm.editSuppliesReoccurrance = function(){
    vm.editReoccurrance = true;
    vm.editReoccurranceTitle = true;
    vm.editReoccurranceSave = true;
    vm.editReoccurranceIcon = false;
    vm.populateReoccurrance = false;
  };
  
  vm.cancelSuppliesReoccurrance = function(){
    vm.editReoccurrance = false;
    vm.editReoccurranceTitle = false;
    vm.editReoccurranceSave = false;
    vm.editReoccurranceIcon = true;
    vm.populateReoccurrance = true;
  };
  
  vm.editSuppliesEmail = function(){
    vm.editEmail = true;
    vm.editEmailTitle = true;
    vm.editEmailSave = true;
    vm.editEmailIcon = false;
    vm.populateEmail = false;
  };
  
  vm.cancelSuppliesEmail = function(){
    vm.editEmail = false;
    vm.editEmailTitle = false;
    vm.editEmailSave = false;
    vm.editEmailIcon = true;
    vm.populateEmail = true;
  };
  
  vm.reoccurranceWeekly = function(){
    vm.reoccurranceWeeklyOptions = true;
    vm.reoccurranceMonthlyOptions = false;
  };
  
  vm.reoccurranceMonthly = function(){
    vm.reoccurranceWeeklyOptions = false;
    vm.reoccurranceMonthlyOptions = true;
  };
  
}

exports.qdViewSuppliesCart = qdViewSuppliesCart;