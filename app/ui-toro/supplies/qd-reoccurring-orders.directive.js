function qdReoccurringOrders() {
  //Usage:
  var directive = {
      scope: {
        'supplies': '='
      },
      restrict: 'EA',
      templateUrl: 'app/ui-toro/supplies/qd-reoccurring-orders.html',
      controller: qdReoccurringOrdersCtrl,
      controllerAs: 'vm'
  };
  return directive;
}

qdReoccurringOrdersCtrl.$inject = ['$scope','$log'];

/* @ngInject */
function qdReoccurringOrdersCtrl($scope, $log) {
  var vm = this;
}

exports.qdReoccurringOrders = qdReoccurringOrders;