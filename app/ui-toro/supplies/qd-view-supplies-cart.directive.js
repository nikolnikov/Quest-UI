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

qdViewSuppliesCartCtrl.$inject = ['$scope','$log'];

/* @ngInject */
function qdViewSuppliesCartCtrl($scope, $log) {
  var vm = this;
}

exports.qdViewSuppliesCart = qdViewSuppliesCart;