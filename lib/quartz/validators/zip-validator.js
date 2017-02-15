'use strict';

function validateZip(zip) {
    var errtxt = '';
    var isOk = true;

    zip = (zip || '');

    //test check digit
    var reg = /^\d{5}(-\d{4})?$/;
    if (zip !== '' && !reg.test(zip)) {
    	errtxt = 'zip needs to be in the form nnnnn or nnnnn-nnnn';
    	isOk = false;
    }

    var ret = {
      status:isOk, 
      errMsg: errtxt
    };
    return ret;
}

exports.validateZip = validateZip;