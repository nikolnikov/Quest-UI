RedditCtrl.$inject = ['$scope', '$log', 'data'];
function RedditCtrl($scope, $log, data) {
  var vm = this;
  vm.patients = _.map(data.redditItems, redditItem2pat);
  vm.category = data.category;

  vm.actionMenuItems = [
    {id: "1", text: "Mark as viewed"},
  ];

  vm.onPatientSelect = function(pat) {
    console.log("PatientCtrl#onPatientSelect:",pat);
  }

  vm.onActionMenuItemSelected = function(item) {
    console.log("PatientCtrl#onActionMenuItemSelected:", item);
  }

  // transform a reddit item to patient
  function redditItem2pat(redditItem) {
    
    return {
      lastName: redditItem.author,
      firstName: redditItem.author,
      address: redditItem.title
    };
  }

}
exports.RedditCtrl = RedditCtrl;