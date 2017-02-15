var emailValidator = require('./email-validator');

/**
 * @ngdoc directive
 * @name qdEmailValidator
 * @module quartz
 * @restrict A
 * @usage
 * <input id="email" name="email" ng-model="vm.email" 
 * 		class="qd-text-input"
 * 		ng-model-options={'updateOn':'blur'}
 * 		qd-email-validator="vm.emailError" required>
 * <div ng-messages="exampleForm.email.$error">
 * 		<div ng-message="qdEmailValidator">{{ vm.emailError }}</div>
 * 		<div ng-message="required">This field is required</div>
 * </div>
 * @description
 * validates email based on industry standard rules<br/>
 * email needs to be of the form aaa@bbb.ccc
 * @param {ngModel} ngModel email needs to be set thru ngModel</p>
 */

function qdEmailValidator(){
  var directive = {
      scope: {
          'qdEmailValidator': '=?'
      },
      restrict: 'A',
      require : 'ngModel',
      link : function (scope, el, attr, controller) {
          controller.$validators.qdEmailValidator =   function checkEmail (email) {
        	  var vStatus = emailValidator.validateEmail(email);
        	  scope.qdEmailValidator = vStatus.errMsg;
        	  
        	  return vStatus.status;
          };
      }
  };
  return directive;
  
}

exports.qdEmailValidator = qdEmailValidator;