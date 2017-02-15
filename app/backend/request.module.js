'use strict';

var requestConfig = require('./request.config');
var requestService = require('./request.service');

angular
  .module('app.request', [])
  .value('requestConfig', requestConfig.config)
  .service('request', requestService.RequestService);