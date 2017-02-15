var sideNavCtrl = require('./sidenav.ctrl');

angular.module('app.ui.sidenav', [])
.controller('AppSideNavCtrl', sideNavCtrl.SideNavCtrl);