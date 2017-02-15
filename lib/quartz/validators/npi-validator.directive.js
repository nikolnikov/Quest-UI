var npiValidator = require('./npi-validator');

/**
 * @ngdoc directive
 * @name qdNpiValidator
 * @module quartz
 * @restrict A
 * @usage
 * <input id="npi" name="npi" ng-model="vm.npi" 
 * 		class="qd-text-input"
 * 		ng-model-options={'updateOn':'blur'}
 * 		qd-npi-validator="vm.npiError" required>
 * <div ng-messages="exampleForm.npi.$error">
 * 		<div ng-message="qdNpiValidator">{{ vm.npiError }}</div>
 * 		<div ng-message="required">This field is required</div>
 * </div>
 * @description
 * validates Npibased on industry standard rules<br/>
 * The NPI is a 10-digit number consisting of 9 digits (with the first digit being a 1 or a 2) followed by a check digit.<br/> 
 * The check digit uses the Luhn algorithm, which is calculated like this: <br/>
 * 1) Double the value of alternate digits beginning with the rightmost digit.<br/>
 * 2) Add the individual digits of the products resulting from step 1 to the unaffected digits from the original number.<br/>
 * 3) Subtract the total obtained in step 2 from the next higher number ending in zero.  This is the check digit. <br/> 
 *    If the total obtained in step 2 is a number ending in zero, the check digit is zero.<br/>
 * So for example:<br/>
 * <p style="text-indent:25px" >Let's say the 9-digit part of the NPI is 123456789.</p>
 * <p style="text-indent:25px" >NPI without check digit: </p>
 * <p style="text-indent:25px" >1     2     3     4     5     6     7     8     9 </p>
 * <p style="text-indent:25px" >Step 1: Double the value of alternate digits, beginning with the rightmost digit.</p>
 * <p style="text-indent:25px" >2            6          10          14          18 </p>
 * <p style="text-indent:25px" >Step 2:  Add constant 24, plus the individual digits of products of doubling, plus unaffected digits. </p>
 * <p style="text-indent:25px" >24 + 2 + 2 + 6 + 4 + 1 + 0 + 6 + 1 + 4 + 8 + 1 + 8 = 67 </p>
 * <p style="text-indent:25px" >Step 3:  Subtract from next higher number ending in zero. </p>
 * <p style="text-indent:25px" >70 – 67 = 3 </p>
 * <p style="text-indent:25px" >Check digit = 3 </p>
 * <p style="text-indent:25px" >NPI with check digit = 1234567893 </p>
 * @param {ngModel} ngModel npi needs to be set thru ngModel</p>
 */

function qdNpiValidator(){
  var directive = {
      scope: {
          'qdNpiValidator': '=?'
      },
      restrict: 'A',
      require : 'ngModel',
      link : function (scope, el, attr, controller) {
          controller.$validators.qdNpiValidator =   function checkNPI (npi) {
        	  var vStatus = npiValidator.validateNpi(npi);
        	  scope.qdNpiValidator = vStatus.errMsg;
        	  
        	  return vStatus.status;
          };
      }
  };
  return directive;
  
}

exports.qdNpiValidator = qdNpiValidator;