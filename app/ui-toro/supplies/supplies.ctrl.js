suppliesCtrl.$inject = ['$scope', '$log', '$state', '$stateParams', '$mdDialog'];
function suppliesCtrl($scope, $log, $state, $stateParams, $mdDialog) {
  var vm = this;
  
  // DEFINE FUNCTIONS
  vm.selectTab = selectTab;
  vm.getSelectedTab = getSelectedTab;
  vm.setSelectedTab = setSelectedTab;
  
  vm.selectedTab = 'Supplies';
  vm.routeTab = $stateParams.tab;
  
  _selectedTab = 'Supplies';
  
  vm.tabs = [
    { 
        title: 'Supplies',
        icon: 'icon-supplies',
        slug: 'Supplies'
    },
    { 
        title: 'Order History', 
        icon: 'icon-history',
        slug: 'History'
    },
    { 
        title: 'Reoccurring Orders', 
        icon: 'icon-cached',
        slug: 'Reoccurring'
    },
    { 
        title: 'View Cart', 
        icon: 'icon-cartfilled',
        slug: 'Cart'
    }
  ];
  
  // INITIALIZE CONTROLLER
  init();

  function init() {
    $log.log('route tab was: ' + vm.routeTab);
    switch (vm.routeTab) {
      case 'Supplies':
        setSelectedTab(vm.tabs[0].slug);
        break;
      case 'History':
        setSelectedTab(vm.tabs[1].slug);
        break;
      case 'Reoccurring':
        setSelectedTab(vm.tabs[2].slug);
        break;
      case 'Cart':
        setSelectedTab(vm.tabs[3].slug);
        break;
    }
    
    vm.selectedTab = getSelectedTab();
  }
  
  function selectTab(slug) {
    vm.selectedTab = slug;
    setSelectedTab(vm.selectedTab);
    switch ( slug ) {
    case 'Supplies':
      vm.tabName = vm.tabs[0].title;
      break;
    case 'History':
      vm.tabName = vm.tabs[1].title;
      break;
    case 'Reoccurring':
      vm.tabName = vm.tabs[2].title;
      break;
    case 'Cart':
      vm.tabName = vm.tabs[3].title;
      break;
    }
  }
  
  function getSelectedTab() {
    return _selectedTab;
  }

  function setSelectedTab(selTab) {
    _selectedTab = selTab;
  }
  
  vm.openMenu = function($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  };
  
}

exports.suppliesCtrl = suppliesCtrl;