'use strict';

function validateDate(date, format, minDate, maxDate) {
  var dateObj, momentDate, momentMinDate, momentMaxDate;
  var errTxt = '';
  var isOk = true;

  date = (date || '');
  format = (format || 'M/D/YYYY');

  momentDate = moment(date, format, true);

  if ((date != '') && !momentDate.isValid()) {
    errTxt = 'Invalid date';
    isOk = false;
  }

  if ((date != '') && isOk) {
    momentMinDate = moment(minDate);
    momentMaxDate = moment(maxDate);
    if (minDate && momentMinDate.isValid() && momentDate.isBefore(momentMinDate)) {
      isOk = false;
      errTxt = 'Date must be ' + momentMinDate.format(format) + ' or after';
    }
    if (isOk && maxDate && momentMaxDate.isValid() && momentDate.isAfter(momentMaxDate)) {
      isOk = false;
      errTxt = 'Date must be ' + momentMaxDate.format(format) + ' or before';
    }
  }

  var ret = {
    status: isOk,
    errMsg: errTxt,
  };
  return ret;
}

exports.validateDate = validateDate;