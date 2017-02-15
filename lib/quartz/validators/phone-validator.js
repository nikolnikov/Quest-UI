'use strict';

function validatePhone(phoneNumber) {

    var errtxt = '';
    var isOk = true;

    var regHcpA = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
    phoneNumber = (phoneNumber || '');

    var regAlpha = /[a-zA-Z]/;
    if (regAlpha.test(phoneNumber)) {
        errtxt = 'Invalid phone number. Cannot contain alpha characters.';
        isOk = false;
    }

    var regSpecial = /^[a-z0-9_ ().-]*$/i;
    if (!regSpecial.test(phoneNumber)) {
        errtxt = 'Invalid phone number. Cannot contain certain special characters.';
        isOk = false;
    }

    var regParan = /[()]/;
    if (regParan.test(phoneNumber) && !regHcpA.test(phoneNumber)){
        errtxt = 'Invalid phone number. Improper use of parentheses.';
        isOk = false;
    }

    var regWs= /\s/;
    if (regWs.test(phoneNumber) && !regHcpA.test(phoneNumber)){
        errtxt = 'Invalid phone number. Cannot contain excessive spaces between digits.';
        isOk = false;
    }

    if (isOk && phoneNumber != '') {
        phoneNumber = phoneNumber.toUpperCase().trim();
        phoneNumber = phoneNumber.replace( /[\D]/g, '');

        if (!phoneNumber) {
            errtxt = 'Invalid phone number.';
            isOk = false;
        }
        else if (phoneNumber.substring(0, 3)=='011') {
            if (phoneNumber.length > 20) {
                errtxt = 'Invalid phone number. Format should be: 10 digits (NANP), or 011 + up to 17 digits (International)';
                isOk = false;
            }
            if (phoneNumber.length < 21) {
                if (phoneNumber.length > 9) {
                    if (phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3, phoneNumber.length)) {
                        isOk = true;
                    }
                }
            }
        }
        else if (phoneNumber.length != 10) {
            errtxt = 'Invalid phone number. Format should be: 10 digits (NANP), or 011 + up to 17 digits (International)';
            isOk = false;
        }
    }

    var ret = {
        status: isOk,
        errMsg: errtxt
    };
    return ret;
}

exports.validatePhone = validatePhone;