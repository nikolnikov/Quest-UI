/* @ngInject */
function qdPageSizeMenu() {
  // Usage:
  //  Not meant to be used standalone.  This should only be used within a dir-paginate template such
  //  as dirPagination.tpl.html.  It depends on the scope of the dir-pagination-controls.
  var directive = {
    restrict: 'E',
    scope: {},
    require: '^^qdPaginationControls',
    template: require('./page-size-menu.html'),
    link: QdPageSizeMenuLinkFn
  };
  return directive;
}

function QdPageSizeMenuLinkFn(scope, element, attrs, qdPaginationControls) {
  scope.qdPaginationControls = qdPaginationControls;
}

exports.qdPageSizeMenu = qdPageSizeMenu;
