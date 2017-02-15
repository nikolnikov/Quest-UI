'use strict';

configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        parent: 'app',
        url: '/home',
        views: {
          'qdcontent@': {
            templateUrl: 'app/ui/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
    });
  }

  exports.configureRoutes = configureRoutes;
