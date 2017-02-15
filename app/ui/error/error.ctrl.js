ErrorCtrl.$inject = ['app'];
function ErrorCtrl(app) {
  var vm = this;
  vm.message = app.error.msg;
};

exports.ErrorCtrl = ErrorCtrl;