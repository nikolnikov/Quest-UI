var qdNpiValidator = require('./npi-validator.directive');
var qdEmailValidator = require('./email-validator.directive');
var qdZipValidator = require('./zip-validator.directive');
var qdPhoneValidator = require('./phone-validator.directive');
var qdSsnValidator = require('./ssn-validator.directive');
var qdDateValidator = require('./date-validator.directive');

angular.module('qd.qz.directives.validators', [])
    .directive('qdNpiValidator', qdNpiValidator.qdNpiValidator)
    .directive('qdZipValidator', qdZipValidator.qdZipValidator)
    .directive('qdEmailValidator', qdEmailValidator.qdEmailValidator)
    .directive('qdPhoneValidator', qdPhoneValidator.qdPhoneValidator)
    .directive('qdSsnValidator', qdSsnValidator.qdSsnValidator)
    .directive('qdDateValidator', qdDateValidator.qdDateValidator);