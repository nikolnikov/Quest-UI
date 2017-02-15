'use strict';

configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('patient', {
      parent: 'app',
      url: '/patient',
      views: {
        'qdcontent@': {
          templateUrl: 'app/ui/patient/patient.html',
          controller: 'PatientCtrl',
          controllerAs: 'vm'
        }
    }
  });
}
exports.configureRoutes = configureRoutes;