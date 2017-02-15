'use strict';

function validateEmail(email) {
    var errtxt = '';
    var isOk = true;

    email = (email || '');

    //test check digit
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email !== '' && !reg.test(email)) {
    	errtxt = 'email needs to be in the form aaa@bbb.ccc';
    	isOk = false;
    }

    var ret = {
      status:isOk, 
      errMsg: errtxt
    };
    return ret;
}

exports.validateEmail = validateEmail;