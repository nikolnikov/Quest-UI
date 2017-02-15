var patientCtrl = require('./patient.ctrl');
var patientRoute = require('./patient.route');

angular
  .module('app.ui.patient', [])
  .controller('PatientCtrl', patientCtrl.PatientCtrl)
  .config(patientRoute.configureRoutes);