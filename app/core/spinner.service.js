'use strict';

/**
 * Run a promise (e.g. an http request) with a spinner spinning.
 * 
 * This is using the usSpinnerService from angular-spinner.js. Look at the us-spinner attribute
 * on the body element of index.html
 * 
 */
SpinnerService.$inject = ['$q', '$log', 'usSpinnerService'];
function SpinnerService($q, $log, usSpinnerService) {

  // API
  this.spinQ = spinQ;

  
  var inflight = 0;
  var timeStampTakeoff = undefined;

  function spinQ(promise) {
    return takeoff(promise);
  }

  function takeoff(promise) {
    if ( inflight == 0) {
      timeStampTakeoff = Date.now();
      usSpinnerService.spin('spinner');
    }
    inflight++;

    // wrap promise such that on resolution (success or failure) the inflight counter is decremented 
    return promise.then(touchdown, touchdown);
  }
  
  function touchdown(s) {
    inflight--;
    if ( inflight == 0) {
       timeStampTakeoff = undefined;
       usSpinnerService.stop('spinner');
    }
    return s;
  }
}

exports.SpinnerService = SpinnerService;