function qdOrderHistory() {
  //Usage:
  var directive = {
      scope: {
        'supplies': '='
      },
      restrict: 'EA',
      templateUrl: 'app/ui-toro/supplies/qd-order-history.html',
      controller: qdOrderHistoryCtrl,
      controllerAs: 'vm'
  };
  return directive;
}

qdOrderHistoryCtrl.$inject = ['$scope','$log'];

/* @ngInject */
function qdOrderHistoryCtrl($scope, $log) {
  var vm = this;
}

exports.qdOrderHistory = qdOrderHistory;