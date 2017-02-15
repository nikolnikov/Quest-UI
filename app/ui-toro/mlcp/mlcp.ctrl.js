MLCPCtrl.$inject = ['$scope', '$log', '$mdDialog'];
function MLCPCtrl($scope, $log, $mdDialog) {
  var vm = this;
  
  vm.showABNDialog = showABNDialog;
  
  $scope.mlcpPolicy = true;
  
  $scope.showTests = function(){
    $scope.testResults = true;
    $scope.pagination = true;
    $scope.testResultsTitle = true;
  };
  
  $scope.selectTest = function(){
    $scope.testContainer = true;
    $scope.policy = true;
  };
  
  $scope.addTest = function(){
    $scope.additionalTest = true;
  };
  
  $scope.showDxResults = function(){
    $scope.testResults = false;
    $scope.dxResults = true;
    $scope.dxSearch = true;
    $scope.testPolicy = true;
    $scope.mlcpPolicy = false;
    $scope.testResultsTitle = false;
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