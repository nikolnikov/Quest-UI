'use strict';

function UtilService() {

  this.isUndefinedOrNull = isUndefinedOrNull;

  function isUndefinedOrNull(val) {
    return angular.isUndefined(val) || val == null;
  }
}

exports.UtilService = UtilService;
    	
  