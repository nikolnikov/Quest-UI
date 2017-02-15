SideNavCtrl.$inject = ['$rootScope', '$scope', 'qdSidenavService', '$state', '$mdSidenav', '$mdMedia'];
function SideNavCtrl($rootScope, $scope, qdSidenavService, $state, $mdSidenav, $mdMedia) {
  var vm = this;
  vm.isEditMode = false;
  vm.isMoreItemsOpen = false;
  vm.moreItemsText = 'More';
  vm.onMobile = $mdMedia('max-width: 600px');
  vm.sideNavNarrow = false;
  vm.isServicePage = false;

  vm.sortableOptions = {
      additionalPlaceholderClass: 'qd-sidenav__list-item'
  };

  vm.closeMenu = closeMenu;
  vm.setWidth = setWidth;
  vm.toggleEditMode = toggleEditMode;
  vm.toggleMoreItems = toggleMoreItems;
  vm.toggleSideNav = toggleSideNav;
  vm.navItemClicked = navItemClicked;
  vm.handleSettingsClicked = handleSettingsClicked;
  vm.handleSignOutClicked = handleSignOutClicked;  

  init();

  function init() {
    qdSidenavService.registerSidenavCtrl(vm);
  }


  $scope.$watch('vm.navMenuItems', function (newValue) {
    // added a watch for when the collection is updated.
    // also clearing out the internal collections on watch refresh.
    vm.lockedItems = [];
    vm.items = [];
    vm.moreItems = [];
    setNavItems();
  });


  function closeMenu() {
      $mdSidenav('leftnav').close();
  }

  function setNavItems() {

      // as we loop through the collection, we will split them up in the section needed by this directive template view
      angular.forEach(vm.navMenuItems, function(navItem) {
        if (navItem.section === 'top' && navItem.sortable === false) {
          vm.lockedItems.push(navItem);
        } else if (navItem.section === 'top' && navItem.sortable === true) {
          vm.items.push(navItem);
        } else if (navItem.section === 'bottom') {
          vm.moreItems.push(navItem);
        }
      });
  }

  function navItemClicked(state) {
    if (vm.isEditMode) {
        return;
    }

    if ($mdMedia('max-width: 1280px')) {
        closeMenu();
    }

    if( vm.onNavItemClicked ) {
      vm.onNavItemClicked({state: state});
    }
  }

  function setWidth(narrow) {
      vm.sideNavNarrow = narrow ? true : false;
  }

  function handleSettingsClicked() {
    // fire event handler
    vm.onSettingsOptionClicked();
  }

  function handleSignOutClicked() {
    // fire event handler
    vm.onSignOutClicked();
  }

  function toggleEditMode() {
      var tmpIsEditMode = angular.copy(vm.isEditMode);
      vm.isEditMode = !vm.isEditMode;
      if (tmpIsEditMode === true && vm.isEditMode === false) {
        // if they are done resorting the nav items, fire the event handler.
        fireResortEventHandler();
      }
      vm.toggleSideNav(false);
  }

  function fireResortEventHandler() {
    // we need to take the different sections, and recompile it into one object to pass back to the event handler.
    var tmpItemsArray = [];
    angular.forEach(vm.lockedItems, function (item) {
      tmpItemsArray.push(item);
    });
    angular.forEach(vm.items, function (item) {
      item.section = 'top';
      tmpItemsArray.push(item);
    });
    angular.forEach(vm.moreItems, function (item) {
      item.section = 'bottom';
      tmpItemsArray.push(item);
    });

    // fire event handler
    vm.onSortableNavItemsResort({collection: tmpItemsArray});
  }

  function toggleMoreItems() {
      vm.isMoreItemsOpen = !vm.isMoreItemsOpen;

      vm.moreItemsText = vm.isMoreItemsOpen ? 'Less' : 'More';
  }

  function toggleSideNav(narrow) {
      qdSidenavService.setWidth(narrow);

      if (narrow) {
          vm.isEditMode = false;
      }
  }
}
qdSidenavService.$inject = ['$rootScope'];
    /* @ngInject */

    function qdSidenavService($rootScope) {
        /*jshint validthis: true */
        var vm = this;
        vm.sidenavCtrl = {};
        vm.sideNavNarrow = false;

        vm.registerSidenavCtrl = registerSidenavCtrl;
        vm.setWidth = setWidth;
        vm.highlightActive = highlightActive;

        return;

        /**
         * Register the controller for the side nav so we can communicate state changes with it.
         * @author Brendan O'Brien
         * @param {Controller} sidenavCtrl The controller for the sidenav whose state will be managed by this service.
         */
        function registerSidenavCtrl(sidenavCtrl) {
            vm.sidenavCtrl = sidenavCtrl;
        }

        /**
         * Set the sidenav to either wide (false) or narrow (true)
         * @author Brendan O'Brien
         * @param {boolean} narrow = false False if it should be wide, True if it should be narrow.
         */
        function setWidth(narrow) {
            //If no sidenavCtrl has been registered, don't do anything.
            if (vm.sidenavCtrl) {
                vm.sidenavCtrl.setWidth(narrow);
                vm.sideNavNarrow = narrow;

                $rootScope.$broadcast('sideNavToggle', { narrow: narrow });
            }
        }

        /**
         * Provide the current route so the sidenav can set the matching navitem's state to active.
         *   The provided route is compared to the routes specified for each nav item to determine which should be active
         *   all other nav items will be set to inactive state.
         * @author Brendan O'Brien
         * @param {string} route The route that we're currently set to. Al
         */
        function highlightActive(route) {
            if (vm.sidenavCtrl) {
                vm.sidenavCtrl.highlightActive(route);
            }
        }
    }

exports.SideNavCtrl = SideNavCtrl;

