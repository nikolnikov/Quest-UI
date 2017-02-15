require('../lib/quartz/common-directives.module');

require('./ui/topnav/topnav.module');
require('./ui/sidenav/sidenav.module');

require('./service/service.module');

require('./ui/home/home.module');
require('./ui/patient/patient.module');
require('./ui-toro/mlcp/mlcp.module');
require('./ui-toro/supplies/supplies.module');
require('./ui/reddit/reddit.module');
require('./ui/error/error.module');

require('./mock/mock.module');

require('./core/core.module');

require('./backend/request.module');

var appRouteConfig = require('./app.route');
var appService = require('./app.service');


angular.module('app', [
  'ngMaterial',
  'ui.router',

  'app.core',

  'app.request',

  'angularSpinner',

  'app.services',

  'app.mock',

  'qd.qz.directives',

  'app.ui.topnav',
  'app.ui.sidenav',

  'app.ui.home',
  'app.ui.patient',
  'app.ui.reddit',
  'app.ui.mlcp',
  'app.ui.supplies',
  'app.ui.error'
])
// configure routing
.config(appRouteConfig.appRouteConfig)

// configure http interceptors to handle errors
.config(['$httpProvider',function ($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptorService');
}])

// register the app service and 'run' it
.service('app', appService.AppService)
.run(['app', function(app) {
  app.run();
}]);

// bootstrap the application
angular.element(document).ready(function () {
  var modules = ['app'];
  angular.bootstrap(document, modules, {
    strictDi: true
  });
});
