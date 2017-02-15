'use strict';

configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('supplies', {
      parent: 'app',
      url: '/supplies',
      views: {
        'qdcontent@root': {
          templateUrl: 'app/ui-toro/supplies/supplies.html',
          controller: 'suppliesCtrl',
          controllerAs: 'vm'
        }
    }
  });
}
exports.configureRoutes = configureRoutes;