/**
 * @ngdoc directive
 * @name qdSidenav
 * @module quartz
 * @restrict E
 * @description
 * `qdSidenav` is used to implement the left hand navigation directive.
 * Note: other than the parameters specified the result object could contain other fields
 *       that will be passed back on the callback( even if they are not displayed ) 
 * @param {Object} navItems A Collection of lockedNavItem.
 * @param {string} navItems.label The display text of the nav item.
 * @param {string} navItems.icon The icon class name, if the nav item has an icon.
 * @param {string} navItems.route The route defined for nav item.
 * @param {string} navItems.badge An optional value if there are pending unViewed items. For example, patient lab results.
 * @param {string} navItems.sortable A boolean true/false value that determines if an item is sortable.
 * @param {string} navItems.section A value that determines if the nav item should appear in the top or bottom section. Valid values are top/bottom
 * @param {callback} onNavItemClicked Callback function to be called a menu item has been clicked.
 * @param {callback} onSettingsOptionClicked Callback function to be called when the settings button is clicked.
 * @param {callback} onSignOutClicked Callback function to be called when sign out button is clicked.
 * @param {callback} onSortableNavItemsResort Callback function to be called when sortable navigation item sort changed.
 * @param {boolean} allowNavItemsSort A boolean true/false value that determines if the "edit navigation section" is visible.
 * @param {boolean} displaySettingsOption A boolean true/false value that determines if the "settings" display is visible.
 * @param {boolean} displaySignOutOption A boolean true/false value that determines if the "sign out" display is visible.
 * 
 */

/* @ngInject */
function qdSidenav() {
  var directive = {
		scope: {
        'navMenuItems': '=',
        'onNavItemClicked': '&',
        'onSortableNavItemsResort': '&',
        'allowNavItemsSort': '=?',
        'displaySettingsOption': '=?',
        'displaySignOutOption': '=?',
        'onSettingsOptionClicked': '&',
        'onSignOutClicked': '&'
    },
    template: require('./sidenav.html'),
    restrict: 'E',
    bindToController: true,
    controller: 'SideNavCtrl',
    controllerAs: 'vm'
  };
  return directive;
}

exports.qdSidenav = qdSidenav;
