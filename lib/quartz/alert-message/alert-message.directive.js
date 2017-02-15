/**
 * @ngdoc directive
 * @name qdAlertMessage
 * @module qd.qz.directives.alert-message
 * @restrict E
 * @scope
 * @description
 * `qdAlertMessage` provides basic error message functionality.  The element can be
 * placed anywhere on the page and it will only appear of the given `message` variable
 * contains a value.  An optional `isError` attribute can be used to signify that the 
 * message should be shown as an error message.  A callback function can be provided 
 * and will be invoked upon closing the message.
 *
 * Optional content can be included inside the directive element and will be transcluded and 
 * wrapped in the resulting div.  This can be used to show the user additional information
 * about the error/warning with an arbitrary block of HTML such as an md-card or other
 * styled element.
 *
 * @param {string} message string data holding the error or warning message. This value will
 * be cleared when the alert is closed. If the value is re-populated in the parent scope, the
 * alert will show again.
 * @param {boolean} isError flag to indicate that the message should be shown as an error. 
 * If `false` or not provided, the message will show as a warning.
 * @param {boolean} showCloseButton flag to indicate whether or not to show a close button used
 * to clear the message.
 * @param {callback} onClose optional function to be invoked when the error/warning message
 * is closed.
 *
 * @example The following example shows how content can be wrapped inside the directive.  It can
 * be as simple as the following:
 *
 *<pre ng-non-bindable>
 *  <qd-alert-message message="vm.alertMessage" is-error="vm.isError" on-close="vm.onClose()" show-close-button="vm.showCloseButton">
 *    <div>Additional error information</div>
 *  </qd-alert-message>
 *</pre>
 *
 * The wrapped content can also be more relevant and complex content that has contextual importance regarding the error.
 * The following will show a mini patient card within the error section:
 *
 *<pre ng-non-bindable>
 *  <qd-alert-message message="vm.alertMessage" is-error="vm.isError" on-close="vm.onClose()" show-close-button="vm.showCloseButton">
 *    <div class="qd-patient-profile-card">
 *      <qd-patient-card-mini
 *        patient="vm.pat.mini"
 *        icon-class="'icon-history'">
 *      </qd-patient-card-mini>
 *    </div>
 *  </qd-alert-message>
 *</pre>
 */

/* @ngInject */
function qdAlertMessage() {
  var directive = {
    restrict: 'E',
    transclude: true,
    scope: {
      message: '=',
      isError: '=',
      showCloseButton: '=',
      onClose: '&'
    },
    template: require('./alert-message.tpl.html'),
    link: function(scope, element, attrs) {
      scope.showAlert = true;
      scope.$watch(function() {
          return angular.element(element[0].querySelector('#wrappedContentId')).text().trim();
        },
        function(newValue, oldValue) {
          scope.showWrappedContent = (newValue && newValue.length > 0);
        }
      );
      
      scope.close = function() {
        scope.message = '';
        scope.onClose();
      };
    },
  };
  return directive;
}

exports.qdAlertMessage = qdAlertMessage;