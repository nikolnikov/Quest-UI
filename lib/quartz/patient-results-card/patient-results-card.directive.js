var qdPatientResultsCardController = require('./patient-results-card.controller');

/**
 * @ngdoc directive
 * @name qdPatientResultsCard
 * @module quartz
 * @restrict E
 * @description
 * `qdPatientResultsCard` is used to display a summary of the Lab Results data.
 * Note: other than the parameters specified the result object could contain other fields
 *       that will be passed back on the callback( even if they are not displayed ) 
 *       - for example result.accession
 * @param {Object} result Object specifying the results.
 * @param {number} result.id The id of test result.
 * @param {string} result.title The title of the test.
 * @param {number} result.status The status of the test. 1-final/0-partial/2-re-issue
 * @param {date} result.date The date of the test result.
 * @param {time} result.time The time of the test result.
 * @param {string} result.reviewedBy The person who reviewed the test.
 * @param {boolean} result.viewed If the result has been viewed, controls look of directive.
 * @param {number} result.abnormality A value to represent the test result. 0-normal, 1-Out of range, 2-critical, 3-see report
 * @param {callback} onResultCardClicked Callback function to be called when results card is clicked
 * 
 */

function qdPatientResultsCardDirective(){
  var directive = {
      scope: {
          'result': '=',
          'onResultCardClicked': '&'
      },
      template: require('./patient-results-card.html'),
      restrict: 'E',
      bindToController: true,
      controller: qdPatientResultsCardController.qdPatientResultsCardController,
      controllerAs: 'vm'
  };
  return directive;
}

exports.qdPatientResultsCardDirective = qdPatientResultsCardDirective;