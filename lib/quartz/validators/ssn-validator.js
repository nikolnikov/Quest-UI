'use strict';

function validateSsn(ssn) {
  var mask, pattern, range, low, high, x1, x2, x3, isOk, i, good1, good2, num1, num2;

  var aSSN = ['', '', '', '', ''];
  var errtxt = '';

  ssn = (ssn || '');
  // Set parameter defaults
  var patterns = {};
  patterns[0] = {
    '078051120': 1
  };
  patterns[1] = {
    '000': 1,
    '666': 1,
    '900-999': 1
  };
  patterns[2] = {
    '00': 1
  };
  patterns[3] = {
    '0000': 1
  };

  // Initialize
  isOk = true;
  if (ssn !== '') {

    var hyphen = '-';
    var regHyphen = new RegExp(hyphen);
    // at most two hyphens
    ssn = ssn.replace(regHyphen, '');
    ssn = ssn.replace(regHyphen, '');
    if (ssn.length > 9) {
      isOk = false;
      errtxt = 'SSN is too long';
    }
    if (isOk) {
      ssn = ssn.replace(/[\D]/g, '');
      if (ssn.length !== 9) {
        isOk = false;
        errtxt = 'Invalid SSN format';
      }
    }

    if (isOk) {
      // check whole ssn for same digit
      if (ssn.match(
          '^(000000000|111111111|222222222|333333333|444444444|555555555|666666666|777777777|888888888|999999999)$'
        )) {
        isOk = false;
        errtxt = 'Invalid SSN format, Same digit found for whole SSN';
      }
    }

    //check for sequentially entered string
    if (isOk) {
      good1 = false;
      good2 = false;
      for (i = 1; i < 9; i++) {
        num1 = Number(ssn.charAt(i));
        num2 = Number(ssn.charAt(i - 1));
        if (!good1) { //forwards
          if ((num1 !== 0) && (num1 !== (num2 + 1))) good1 = true;
          if ((num1 === 0) && (num2 !== 9)) good1 = true;
        }
        if (!good2) { //backwards
          if ((num1 !== 9) && (num1 !== (num2 - 1))) good2 = true;
          if ((num1 === 9) && (num2 !== 0)) good2 = true;
        }
        if (good1 && good2) break;
      }
      if (!good1 || !good2) {
        isOk = false;
        errtxt = 'Invalid SSN format, Sequential pattern found';
      }
    }

    if (isOk) {
      aSSN[0] = aSSN[4] = ssn;
      x1 = aSSN[1] = ssn.substring(0, 3);
      x2 = aSSN[2] = ssn.substring(3, 5);
      x3 = aSSN[3] = ssn.substring(5, 9);
      ssn = x1 + '-' + x2 + '-' + x3;

      for (i = 0; i < 5; i++) {
        if (isOk) {
          mask = aSSN[i];

          for (pattern in patterns[i]) {

            if (patterns[i].hasOwnProperty(pattern)) {
              if (pattern.indexOf('-') > -1) {
                range = pattern.split('-');
                low = range[0];
                high = range[1];
                if ((mask >= low) && (mask <= high)) {
                  isOk = false;
                  errtxt =
                    'The Social Security Number entered does not comply with the requirements published by the \n';
                  errtxt = errtxt + 'Social Security Administration. \n \n';
                  errtxt = errtxt + 'Please verify the number.';
                }
              } else {
                if (mask == pattern) {
                  isOk = false;
                  errtxt =
                    'The Social Security Number entered does not comply with the requirements published by the \n';
                  errtxt = errtxt + 'Social Security Administration. \n \n';
                  errtxt = errtxt + 'Please verify the number.';
                }
              }
            }
          }
        }
      }
    }
  }

  var ret = {
    status: isOk,
    errMsg: errtxt
  };
  return ret;
}

exports.validateSsn = validateSsn;
