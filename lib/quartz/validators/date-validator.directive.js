var dateValidator = require('./date-validator');

/**
 * @ngdoc directive
 * @name qdDateValidator
 * @module quartz
 * @restrict A
 * @usage
 * <input id="date" name="date" ng-model="vm.date" 
     class="qd-text-input"
     ng-model-options={'updateOn':'blur'}
     required
     qd-date-validator="vm.dateError"
     min-date="vm.minDate"
     max-date="vm.maxDate"
     date-format="vm.dateFormat"/>
  <div ng-messages="exampleForm.date.$error">
     <div ng-message="qdDateValidator">{{ vm.dateError }}</div>
     <div ng-message="required">This field is required</div>
  </div>
 * @description
 * Validates a date using moment.js.  Supports optional min and max dates.  A date
 * format string can be supplied.  If not supplied, this defaults to 'M/D/YYYY'.
 * See http://momentjs.com/docs/ for `moment.js` documentation.
 * @param {string} ngModel date needs to be set thru ngModel
 * @param {date} minDate the minimum date allowed
 * @param {date} maxDate the maximum date allowed
 * @param {string} dateFormat an optional format string for moment.js.  Defaults to 'M/D/YYYY'
 */

function qdDateValidator() {
  var directive = {
    scope: {
      'qdDateValidator': '=?',
      'minDate': '=?',
      'maxDate': '=?',
      'dateFormat': '=?'
    },
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, el, attr, controller) {
      controller.$validators.qdDateValidator = function checkDate(date) {
        var vStatus = dateValidator.validateDate(date, scope.dateFormat, scope.minDate, scope.maxDate);
        scope.qdDateValidator = vStatus.errMsg;
        return vStatus.status;
      };
    }
  };
  return directive;
}

exports.qdDateValidator = qdDateValidator;