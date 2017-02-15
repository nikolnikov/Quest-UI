'use strict';

AppService.$inject = ['$rootScope','$state'];
function AppService($rootScope, $state) {
  var self = this;

  // initialize service
  this.run = function() {}

  this.error = {
    msg: ""
  };

  $rootScope.$on("httpError", function(event, arg) {
    self.error.msg = "HTTP Error: " + arg;
    $state.go("error");
  });
}
exports.AppService = AppService;
