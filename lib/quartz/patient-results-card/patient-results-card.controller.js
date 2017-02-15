'use strict';
qdPatientResultsCardController.$inject = ['$log', '$mdDialog', '$mdMedia', 'qzUtil'];
/* @ngInject */
function qdPatientResultsCardController($log, $mdDialog, $mdMedia, qzUtil) {
  var vm = this;

  // DEFINE FUNCTIONS
  vm.showResultMoreInfo = showResultMoreInfo;
  vm.showResultNameDialog = showResultNameDialog;
  vm.resultsCardClicked = resultsCardClicked;

  function showResultMoreInfo(cardResult) {
    // CT solution for detecting mobile media query
    var onMobile = $mdMedia('(max-width: 600px)');

    // Revised from CT delivered solution on checking overflow.
    var eleId = 'qd-result-card__title-for-id-' + cardResult.id;
    var cardElement = angular.element(document.getElementById(eleId));
    if (onMobile || (cardResult.title != 'undefined' && isResultCardOverflow(cardElement))) {
      return true;
    }
    else{
      return false
    }
  }

  function isResultCardOverflow(ele) {
    if (qzUtil.isUndefinedOrNull(ele[0])) {
      return false;
    }
    else {
      return (ele[0].offsetWidth < ele[0].scrollWidth);
    }
  }

  function showResultNameDialog(result) {
    $mdDialog.show({
      controller: 'DialogCtrl as vm',
      template: require('../common/dialogs/result-name-dialog.html'),
      parent: angular.element(document.body),
      textContent: result.title,
      clickOutsideToClose:true
    });
  }

  function resultsCardClicked(rslt) {
	  if( vm.onResultCardClicked ) {
		  vm.onResultCardClicked(rslt);
	  }
  }
}

exports.qdPatientResultsCardController = qdPatientResultsCardController;

