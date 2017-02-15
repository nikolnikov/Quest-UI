'use strict';

configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('mlcp', {
      parent: 'app',
      url: '/mlcp',
      views: {
        'qdcontent@root': {
          templateUrl: 'app/ui-toro/mlcp/mlcp.html',
          controller: 'MLCPCtrl',
          controllerAs: 'vm'
        }
    }
  });
}
exports.configureRoutes = configureRoutes;