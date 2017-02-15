appRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function appRouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/supplies');

  //
  // root layout for a portal app, consisting of
  // top/side nav and content area
  //

  $stateProvider
    .state('app', {
        abstract: true,
        views: {        
          'qdtopnav': {
            templateUrl: 'app/ui/topnav/topnav.html',
            controller: 'TopNavCtrl',
            controllerAs: 'vm'
          },
          'qdsidenav': {
            templateUrl: 'app/ui/sidenav/sidenav.html',
            controller: 'AppSideNavCtrl',
            controllerAs: 'vm'
          },
          'qdcontent': {
            templateUrl: 'app/ui-toro/supplies/supplies.html',
            controller: 'suppliesCtrl',
            controllerAs: 'vm'
          }
        }
    });

}

exports.appRouteConfig = appRouteConfig;