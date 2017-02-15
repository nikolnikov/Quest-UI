var requestService = require('./request.service');
var httpInterceptorService = require('./http-interceptor.service');
var spinnerService = require('./spinner.service');

angular.module('app.core', [])
  .factory('httpInterceptorService', httpInterceptorService.HttpInterceptorService )
  .service('qzSpinner', spinnerService.SpinnerService)
  .controller('requestService', requestService.RequestService)