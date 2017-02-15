var pageSizeMenu = require('./page-size-menu.directive');
var qdPaginationControls = require('./pagination-controls.directive');

var paginationHtml = require('./dirPagination.tpl.html');

angular.module('qd.qz.directives.pagination', ['angularUtils.directives.dirPagination'])
  .directive('qdPageSizeMenu', pageSizeMenu.qdPageSizeMenu)
  .directive('qdPaginationControls', qdPaginationControls.qdPaginationControls)
  .config(['paginationTemplateProvider', function(paginationTemplateProvider) {
    paginationTemplateProvider.setString(paginationHtml);
  }]);
