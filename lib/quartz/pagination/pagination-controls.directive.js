/**
 * @ngdoc directive
 * @name qdPaginationControls
 * @module qd.qz.directives.pagination
 * @restrict E
 * @description
 * `qdPaginationControls` provides pagination controls and a drop-down menu for 
 * selecting the desired page size for a set of data. 
 * `qdPaginationControls` is used in conjuntion with the `dir-paginate` directive of
 * the angular-utils-pagination third-party library 
 * (https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination).  
 * It can be thought of as an 
 * "extension" of the `dir-pagination-controls` directive of that library.  This 
 * directive implements Quartz-styled pagination controls and allows dynamically 
 * selecting the page size during run time.  It acts as a 'parent' directive to the `qdPageSizeMenu` 
 * directive, which should not be used directly.  
 *
 * `paginationId` must be the same value as `paginationId` of the corresponding 
 * `dir-paginate` directive
 *
 * `itemsPerPage` must be bound to the same variable as `itemsPerPage` of the 
 * corresponding dir-paginate directive that manages the actual paged data.
 * @param {string} paginationId A unique identifier for this set of paged data. 
 * Must be the same value as the `paginationId` of the corresponding dir-paginate directive.
 * @param {number} itemsPerPage Must be bound to the same variable as the itemsPerPage setting
 * of the dir-paginate directive.  This represents the number of items to be displayed
 * on each page of data.  This ideally should be bound to a variable in your controller, and
 * itemsPerPage of `dir-paginate` should be bound to the same variable.  See the example section
 * below.
 * @param {Object} pageSizeOptions An `Array` of number values representing the selectable
 * page size options in the pagination controls drop-down.
 * @example The following is an example of using the `qd-pagination-controls` directive in 
 * conjuntion with the `dir-paginate` directive.  The two directives are linked together by
 * being bound to the same value for `paginationId` and `itemsPerPage`.
 *  
 * <pre ng-non-bindable>
       <qd-pagination-controls 
         page-size-options="vm.pageSizes" 
         items-per-page="vm.itemsPerPage" 
         pagination-id="myPaginationId">
       </qd-pagination-controls>
       <div dir-paginate="i in vm.getItems() | itemsPerPage: vm.itemsPerPage" 
         pagination-id="myPaginationId" 
         current-page="vm.currentPage">
           {{i}}}
       </div>
   </pre>
 */

/* @ngInject */
function qdPaginationControls() {
  var directive = {
    restrict: 'E',
    scope: {},
    bindToController: {
      paginationId: '@',
      pageSizeOptions: '=',
      itemsPerPage: '='
    },
    template: '<dir-pagination-controls pagination-id="vm.paginationId"></dir-pagination-controls>',
    controller: QdPaginationControlsController,
    controllerAs: 'vm'
  };

  return directive;
}

function QdPaginationControlsController() {
  var vm = this;
  var defaultPageSizes = [10,20,50,100];
  
  vm.getPageSizes = function() {
    return vm.pageSizeOptions ? vm.pageSizeOptions : defaultPageSizes;
  };

  vm.setPageSize = function (pageSize) {
    vm.itemsPerPage = pageSize;
  };
  
  vm.isPageSizeSelected = function(pageSize) {
    return vm.itemsPerPage == pageSize;
  };
  
}

exports.qdPaginationControls = qdPaginationControls;
