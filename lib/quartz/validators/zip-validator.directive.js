var zipValidator = require('./zip-validator');

/**
 * @ngdoc directive
 * @name qdZipValidator
 * @module quartz
 * @restrict A
 * @usage
 * <input id="zip" name="zip" ng-model="vm.zip" 
 * 		class="qd-text-input"
 * 		ng-model-options={'updateOn':'blur'}
 * 		qd-zip-validator="vm.zipError" required>
 * <div ng-messages="exampleForm.zip.$error">
 * 		<div ng-message="qdZipValidator">{{ vm.zipError }}</div>
 * 		<div ng-message="required">This field is required</div>
 * </div>
 * @description
 * validates zip based on US zip code rules<br/>
 * Zip needs to be of the form nnnnn or nnnnn-nnnn
 * @param {ngModel} ngModel zip code needs to be set thru ngModel</p>
 */

function qdZipValidator(){
  var directive = {
      scope: {
          'qdZipValidator': '=?'
      },
      restrict: 'A',
      require : 'ngModel',
      link : function (scope, el, attr, controller) {
          controller.$validators.qdZipValidator =   function checkZip (zip) {
        	  var vStatus = zipValidator.validateZip(zip);
        	  scope.qdZipValidator = vStatus.errMsg;
        	  
        	  return vStatus.status;
          };
      }
  };
  return directive;
  

}

exports.qdZipValidator = qdZipValidator;