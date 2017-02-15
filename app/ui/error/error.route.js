'use strict';

configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('error', {
      parent: 'app',
      url: '/error',
      views: {
        'qdcontent@': {
          templateUrl: 'app/ui/error/error.html',
          controller: 'ErrorCtrl',
          controllerAs: 'vm'
      }
    }
  });
}

exports.configureRoutes = configureRoutes;