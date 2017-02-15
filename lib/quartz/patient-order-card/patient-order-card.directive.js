var qdPatientOrderCardController = require('./patient-order-card.controller');

/**
 * @ngdoc directive
 * @name qdPatientOrderCard
 * @module quartz
 * @restrict E
 * @description
 * `qdPatientOrderCard` is used to display a summary of Lab Order Data.
 * @param {Object} order Object specifying the order.
 * @param {string} order.clientName The client name of the order
 * @param {number} order.clientNumber The client number of the order.
 * @param {date} order.dateCreated The date the order was created.
 * @param {date} order.dateOfBirth The date of birth of the patient.
 * @param {string} order.editedBy The edited by field of the order.
 * @param {string} order.patientOID The OID of the patient
 * @param {string} order.patientOrderOIDs The order OIDs associated with the patient.
 * @param {string} order.patientLastName The last name of the patient.
 * @param {string} order.perfSite The perfSite of the order.
 * @param {string} order.patientFirstName The first name of the patient.
 * @param {string} order.physicianId The ordering physician ID.
 * @param {string} order.physicianName The ordering physician name.
 * @param {string} order.progress The progress of the order.
 * @param {dateTime} order.progressChanged The progress changed of the order.
 * @param {string} order.requisition The requisition of the order.
 * @param {string} order.status The status of the order.
 * @param {string} order.tests string of tests associated to an order
 * @param {boolean} showNameMolecule indicator to show patient name molecule above card. Optional: defaults to true if not specified.
 * @param {callback} onOrderCardClicked Callback function to be called when order card is clicked
 * @param {callback} onActionMenuItemSelected Callback function to be called when action menu item is selected
 *
 */

function qdPatientOrderCardDirective(){
    var directive = {
        scope: {
            'order': '=order',
            'showNameMolecule': '=?',
            'onOrderCardClicked': '&',
            'onActionMenuItemSelected': '&'
        },
        template: require('./patient-order-card.html'),
        restrict: 'E',
        bindToController: true,
        controller: qdPatientOrderCardController.qdPatientOrderCardController,
        controllerAs: 'vm'
    };
    return directive;
}

exports.qdPatientOrderCardDirective = qdPatientOrderCardDirective;