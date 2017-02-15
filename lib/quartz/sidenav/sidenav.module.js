var sideNavService = require('./sidenav-service');
var sideNavController = require('./sidenav.controller');
var sideNavDirective = require('./sidenav.directive');


angular.module('qd.qz.directives.sidenav', [
	'ui.router', 'as.sortable'
])
  .controller('SideNavCtrl', sideNavController.SideNavCtrl)
  .service('qdSidenavService', sideNavService.qdSidenavService)
  .directive('qdSidenav', sideNavDirective.qdSidenav);