function qdSupplies() {
  //Usage:
  var directive = {
      scope: {
        'supplies': '='
      },
      restrict: 'EA',
      templateUrl: 'app/ui-toro/supplies/qd-supplies.html',
      controller: qdSuppliesCtrl,
      controllerAs: 'vm'
  };
  return directive;
}

qdSuppliesCtrl.$inject = ['$scope', '$log', '$mdPanel'];

/* @ngInject */
function qdSuppliesCtrl($scope, $log, $mdPanel) {
  var vm = this;
  
  vm.showCategories = showCategories;

  function showCategories() {
    var position = $mdPanel.newPanelPosition()
      .relativeTo('.qd-button__categories')
      .addPanelPosition($mdPanel.xPosition.ALIGN_START, $mdPanel.yPosition.BELOW);
  
    var config = {
      attachTo: angular.element(document.body),
      //controller: qdSuppliesCtrl.qdSuppliesCtrl,
      //locals: {labOrder: pLabOrder},
      controllerAs: 'vm',
      //disableParentScroll: this.disableParentScroll,
      templateUrl: 'app/ui-toro/supplies/qd-supplies-categories.html',
      hasBackdrop: false,
      panelClass: 'qd-supplies__categories',
      position: position,
      trapFocus: true,
      //zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };
  
    $mdPanel.open(config);
  
  };
  
  vm.openMenu = function($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  };
}

exports.qdSupplies = qdSupplies;