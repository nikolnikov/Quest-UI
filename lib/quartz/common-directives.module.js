require('./util/util.module');

var DialogCtrl = require('./common/dialogs/dialog.controller');

// avatar
require('./avatar/avatar.module');
//patient results card
require('./patient-results-card/patient-results-card.module');
// patient card
require('./patient-card/patient-card.module');
// patient order card
require('./patient-order-card/patient-order-card.module');
// patient profile card
require('./patient-profile-header/patient-profile-header.module');
//patient contact card
require('./patient-profile-contact/patient-profile-contact.module');
//patient insurance card
require('./patient-profile-insurance/patient-profile-insurance.module');
// sidenav
require('./sidenav/sidenav.module');
// status bars
require('./status-bars/status-bars.module');
//validators
require('./validators/validators.module');
//pagination
require('./pagination/pagination.module');
//account-widget
require('./account/account-widget.module');
//alert-message
require('./alert-message/alert-message.module');
 
angular.module('qd.qz.directives', [
  'qd.qz.util',
  'qd.qz.directives.avatar',
  'qd.qz.directives.patient-card',
  'qd.qz.directives.patient-order-card',
  'qd.qz.directives.patient-profile-header',
  'qd.qz.directives.patient-profile-contact',
  'qd.qz.directives.patient-profile-insurance',
  'qd.qz.directives.patient-results-card',
  'qd.qz.directives.validators',
  'qd.qz.directives.sidenav',
  'qd.qz.directives.status-bars',
  'qd.qz.directives.pagination',
  'qd.qz.directives.account-widget',
  'qd.qz.directives.alert-message'
])
  .controller('DialogCtrl', DialogCtrl.DialogCtrl);