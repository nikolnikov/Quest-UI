HomeCtrl.$inject = ['$state'];
function HomeCtrl($state) {
  var vm = this;

  vm.features = [
    {num: 1, desc: "Angular JS", stateParam: 'angularjs'},
    {num: 2, desc: "Health Care", stateParam: 'healthcare'},
    {num: 3, desc: "Greenland", stateParam: 'greenland'}
  ];

  vm.featureClicked = function(feature) {
    $state.go("reddit", { "redditCat": feature.stateParam});
  }
  
};

exports.HomeCtrl = HomeCtrl;
