var ssnValidator = require('./ssn-validator');

/**
 * @ngdoc directive
 * @name qdSsnValidator
 * @module quartz
 * @restrict A
 * @usage
 * <input id="ssn" name="ssn" ng-model="vm.ssn"
 * 		class="qd-text-input"
 * 		ng-model-options={'updateOn':'blur'}
 * 		qd-Ssn-validator="vm.ssnError" required>
 * <div ng-messages="exampleForm.ssn.$error">
 * 		<div ng-message="qdSsnValidator">{{ vm.ssnError }}</div>
 * </div>
 * @description
 * validates ssn based on LOR rules<br/>
 * - checks the initial length
 * - removes hypens and checks the length
 * - check it's not the same digit
 * - check the area, group, and serial for same digits
 * - check that pattern isn't sequential
 * - check against published SSN requirements
 * @param {ngModel} ngModel ssn needs to be set thru ngModel</p>
 */

function qdSsnValidator() {
  var directive = {
    scope: {
      'qdSsnValidator': '=?'
    },
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, el, attr, controller) {
    	controller.$validators.qdSsnValidator =   function checkSsn(ssn) {
    		var vStatus = ssnValidator.validateSsn(ssn);
    		scope.qdSsnValidator = vStatus.errMsg;

    		return vStatus.status;
    	};
    }
  };
  return directive;

}

exports.qdSsnValidator = qdSsnValidator;
