function qdDocs(){
  var directive = {
      scope: {
          'result': '='
      },
      restrict: 'E',
      link: function(scope, element, attrs) {
    	  scope.getContentUrl = function() {
    		  return './directives/docs/partials/api/' + attrs.docName + '.html';
    	  }
      },
      template: '<div ng-include="getContentUrl()"></div>'  };
  return directive;
}

exports.qdDocs = qdDocs;