MLCPCtrl.$inject = ['$scope', '$log', '$mdDialog'];
function MLCPCtrl($scope, $log, $mdDialog) {
  var vm = this;
  
  vm.showABNDialog = showABNDialog;
  
  vm.mlcpPolicy = true;
  
  vm.showTests = function(){
    vm.testResults = true;
    vm.pagination = true;
    vm.testResultsTitle = true;
  };
  
  vm.selectTest = function(){
    vm.testContainer = true;
    vm.policy = true;
  };
  
  vm.addTest = function(){
    vm.additionalTest = true;
  };
  
  vm.showDxResults = function(){
    vm.testResults = false;
    vm.dxResults = true;
    vm.dxSearch = true;
    vm.testPolicy = true;
    vm.mlcpPolicy = false;
    vm.testResultsTitle = false;
  };
  
  vm.showSecondaryDx = function(){
    vm.arrowDown = true;
    vm.arrowUp = true;
    vm.secondaryDx = true;
  };
  
  vm.hideSecondaryDx = function(){
    vm.arrowDown = false;
    vm.arrowUp = false;
    vm.secondaryDx = false;
  };
  
  function showABNDialog(item, ev) {
    $mdDialog.show({
      locals: { parentVm: vm },
      controller: angular.noop,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/ui-toro/dialogs/abn-rules-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  }
}
exports.MLCPCtrl = MLCPCtrl;