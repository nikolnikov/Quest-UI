'use strict';

/**
 * manage backend requests
 * 
 */
RequestService.$inject = ['$http', 'requestConfig'];
function RequestService($http, requestConfig) {

  this.runQ = runQ;
  
  // run a backend request by 'logical' name. The name has to be registered via
  // 'requestConfig'
  function runQ(name, params, data) {

    var req = requestConfig.requests[name];
    var url = applyParams(req.url, params);
    var transformResponse = req.transformResponse;

    var config = {
      url: url,
      data: data
    };
    
    return http[req.httpMethod](config).then( function(res) {
      return transformResponse ? transformResponse(res.data) : res.data;
    });
  }

  function applyParams(url, params) {
    _.mapObject(params, function(val, key) {
      url = url.replace("{" + key + "}", val);
    });
    return url;
  }
  
  var http = {
    'GET': getQ,
    'POST': postQ
  };
    
  function getQ(config) {
    return $http({
      method: "GET",
      url: config.url
    });
  }
  
  function postQ(config) {
    return $http({
      method: "POST",
      url: config.url,
      headers: {'Content-Type': "application/json"},
      data: data
    });
  }
}
exports.RequestService = RequestService;