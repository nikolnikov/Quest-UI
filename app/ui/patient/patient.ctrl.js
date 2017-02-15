PatientCtrl.$inject = ['$scope', '$log', 'mockPatientService', 'request'];
function PatientCtrl($scope, $log, mps, request) {
  var vm = this;

  vm.patient = {
    // pid: 123,
    // lastName: 'Caballero',
    // firstName: 'Adan',
    // middleName:"",
    // address1: "504 N Everina Cir, Brandon,  FL 33510",
    // sex: "Male",
    // dob:"03/14/1966"
  };

  vm.actionMenuItems = [
    {id: "1", text: "View Result"},
    {id: "2", text: "New Lab Order"}
  ];

  vm.onPatientSelect = function(pid) {
    console.log("PatientCtrl#onPatientSelect:", pid);
  }

  vm.onActionMenuItemSelected = function(item) {
    console.log("PatientCtrl#onActionMenuItemSelected:", item);
  }

  vm.getPatient = function() {

    request.runQ("getRedditItems", {category: 'angularjs'}).then( function (res) {
      console.log("getRedditItems: ", res);
    });

    // get list of patients
    mps.getPidsQ().then(function(pids) {

      // select a random
      var pid = pids[_.random(pids.length - 1)];
      console.log("pid: ", pid);
      mps.getPatientQ(pid).then(function (pat) {
        vm.patient = pat2pat(pat);
      });
    });
  }

  // transform a patient object to comply to patient card field layout
  function pat2pat(p) {
    return {
      lastName: p.lastName,
      firstName: p.firstName,
      middleName: p.middleName,
      address: p.address1,
      dob: p.dob,
      sex: p.sex,
      primaryPhone: p.phone
    };
  }

  vm.getPatient();

}
exports.PatientCtrl = PatientCtrl;