require('../../../lib/quartz/common-directives.module');

require('./mlcp.module');

require('../../ui/error/error.module');

require('../../mock/mock.module');

require('../../core/core.module');

// var appRouteConfig = require('./app.route');
// var appService = require('./app.service');

var states = {
  
}

//
/*appRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function appRouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('app.mlcp', {
        // views: {        
        //  'lorcontent': {
        url: '/mlcp',
            templateUrl: 'app/ui-toro/mlcp/mlcp.html',
            controller: 'MLCPCtrl',
            controllerAs: 'vm'
          // }
        // }
    });
}
*/
// exports.appRouteConfig = appRouteConfig;


angular.module('app', [
  'ngMaterial',
  'ui.router',

  'app.core',

  'angularSpinner',

  'app.mock',

  'qd.qz.directives',

  'app.ui.error',
  
  'app.ui.supplies'
]);

// configure routing
// .config(appRouteConfig);

// configure http interceptors to handle errors
//.config(['$httpProvider',function ($httpProvider) {
//  $httpProvider.interceptors.push('httpInterceptorService');
//}])

// bootstrap the application
angular.element(document).ready(function () {
  var modules = ['app'];
  angular.bootstrap(document, modules, {
    strictDi: true
  });
});

