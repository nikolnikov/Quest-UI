var DialogCtrl = require('./dialog.controller');

angular.module('app.ui-toro.dialogs', [
    'app.core'
])
.controller('DialogCtrl', DialogCtrl.DialogCtrl);