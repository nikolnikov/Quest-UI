'use strict';

function validateNpi(npi) {
    var digary, reg, digit, enteredcd, sum, oldsum, tempstr, tempdig, tempnum, lastdig, nexthigh, cd;
    var errtxt = '';
    var never = false;
    var isOk = false;

    npi = (npi || '');

    do { // This is merely a structured goto. No looping is expected or intended.
      if (npi == '') {
        isOk = true;
        break;
      }

      //test check digit
      reg = /\d{10}$/;
      if (!reg.test(npi)) {
        errtxt = 'NPI must be 10 Numerics.';
        break;
      }

      //first split the npi into individual digits
      digary = new Array(9);
      for (digit = 0; digit < 9; digit++) {
        tempnum = npi.substr(digit, 1);
        digary[digit] = Number(tempnum);
      }
      enteredcd = npi.substr(9, 1);

      //  double the value of the alternate digits
      digary[0] = 2 * digary[0];
      digary[2] = 2 * digary[2];
      digary[4] = 2 * digary[4];
      digary[6] = 2 * digary[6];
      digary[8] = 2 * digary[8];

      //  add constant 24 to account for the 80840 prefix that would be present on a card issuer identifier, plus the individual digits of the products of the doubling, plus unaffected digits.
      sum = 24;
      for (digit = 0; digit < 9; digit++) {
        oldsum = sum;
        tempstr = String(digary[digit]);
        for (tempdig = 0; tempdig < tempstr.length; tempdig++) {
          tempnum = Number(tempstr.substr(tempdig, 1));
          sum = sum + tempnum;
        }
      }

      //  subtract from the next higher number ending in zero;
      lastdig = sum % 10;
      nexthigh = sum - lastdig;
      if (lastdig != 0) {nexthigh = nexthigh + 10;}
      cd = nexthigh - sum;
      if (cd != Number(enteredcd))  {
        errtxt = 'Invalid NPI Check Digit';
        break;
      }

      isOk = true;
    } while(never);

    //console.log('about to return: ' + isOk + ' ' + errtxt);
    var ret = {
      status:isOk, 
      errMsg: errtxt
    };
    return ret;
}

exports.validateNpi = validateNpi;