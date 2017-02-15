function qdSidenavService() {
  var vm = this;
  vm.sidenavCtrl = undefined;

  vm.registerSidenavCtrl = registerSidenavCtrl;
  vm.setWidth = setWidth;
  vm.highlightActive = highlightActive;
  vm.resultsVisited = false;

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

exports.qdSidenavService = qdSidenavService;
