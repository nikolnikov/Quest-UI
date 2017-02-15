var phoneValidator = require('./phone-validator');

/**
 * @ngdoc directive
 * @name qdPhoneValidator
 * @module quartz
 * @restrict A
 * @usage
 * <input id="phone" name="phone" ng-model="vm.phoneError"
 * 		class="qd-text-input"
 * 		ng-model-options={'updateOn':'blur'}
 * 		qd-phone-validator="vm.phoneError" required>
 * <div ng-messages="exampleForm.phone.$error">
 * 		<div ng-message="qdPhoneValidator">{{ vm.phoneError }}</div>
 * 		<div ng-message="required">This field is required</div>
 * </div>
 * @description
 * validates telephone number based on North American Numbering Plan standards from
 * United States, Canada, and other NANP countries
 * <br/>
 * The validator check uses a RegEx allowing:
 * <li>7 or 10 digit number with extensions</li>
 * <li>delimiters spaces, dashes, or periods</li>
 * @param {ngModel} ngModel telephone needs to be set thru ngModel</p>
 */

function qdPhoneValidator(){
  var directive = {
      scope: {
          'qdPhoneValidator': '=?'
      },
      restrict: 'A',
      require : 'ngModel',
      link : function (scope, el, attr, controller) {
          controller.$validators.qdPhoneValidator = function(phoneNumber) {
        	  var vStatus = phoneValidator.validatePhone(phoneNumber);
        	  scope.qdPhoneValidator = vStatus.errMsg;
        	  
        	  return vStatus.status;
          };
      }
  };
  return directive;
}

exports.qdPhoneValidator = qdPhoneValidator;