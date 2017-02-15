var patientService = require('./patient.service');

angular.module('app.mock', [])
  .service('mockPatientService', patientService.PatientService);