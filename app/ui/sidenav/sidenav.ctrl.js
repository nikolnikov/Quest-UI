SideNavCtrl.$inject = ['$scope', '$log', '$state', '$timeout'];
function SideNavCtrl($scope, $log, $state, $timeout) {
    
  var vm = this;
  vm.onNavItemClicked = onNavItemClicked;


  function onNavItemClicked(state) {
    var rs = state.split(',');
    var route = rs[0];
    var params = undefined;
    
    if ( rs[1] ) {
      var kv = rs[1].split(':');
      params = {};
      params[kv[0]] = kv[1];
    }

    $state.transitionTo(route, params);
  }

  vm.navMenuItems = [
    {
        'label': 'Home',
        'icon': 'icon-home',
        'route': 'home',
        'section': 'top',
        'sortable': false
    },
    {
        'label': 'Reddit - AngularJS',
        'icon': 'icon-setting',
        'route': 'reddit,redditCat:angularjs',
        'section': 'top',
        'sortable': false
    },
    {
        'label': 'Reddit - Health Care',
        'icon': 'icon-diagnoses',
        'route': 'reddit,redditCat:healthcare',
        'section': 'top',
        'sortable': false
    },
    {
        'label': 'Reddit - Greenland',
        'icon': 'icon-image',
        'route': 'reddit,redditCat:greenland',
        'section': 'top',
        'sortable': false
    }
  ];

}



exports.SideNavCtrl = SideNavCtrl;