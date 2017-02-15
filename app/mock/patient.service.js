PatientService.$inject = ['$q'];
function PatientService($q) {

  this.getPidsQ = getPidsQ;
  this.getPatientQ = getPatientQ;

  function getPidsQ() {
    return $q.when(_.pluck(data, 'patientOID'));
  }

  function getPatientQ(pid) {
    var pat = _.find(data, function(p) {
      return p.patientOID == pid;
    });
    return $q.when(pat);
  }


  var data = 
  [
    {
      "patientOID": "267",
      "lastName": "Aaa",
      "firstName": "Bbb",
      "dob": "01/01/1951",
      "sex": "Male",
      "address1": "17066 Aaa Rd, Aville,  FL 34601",
      "phone": "(123) 123-1233"
    },
    {
      "patientOID": "277",
      "lastName": "Bbb",
      "firstName": "Ccc",
      "dob": "02/02/1952",
      "sex": "Female",
      "address1": "18066 Bbb Rd, Bville,  FL 34601",
      "phone": "(234) 234-2345"
    },
    {
      "patientOID": "297",
      "lastName": "Ccc",
      "firstName": "Ddd",
      "dob": "03/03/1953",
      "sex": "Male",
      "address1": "19066 Ccc Rd, Cville,  FL 34601",
      "phone": "(345) 345-3456"
    }
  ];
}

exports.PatientService = PatientService;
  