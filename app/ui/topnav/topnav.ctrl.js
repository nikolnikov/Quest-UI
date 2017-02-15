TopNavCtrl.$inject = ['$mdSidenav'];
function TopNavCtrl($mdSidenav) {
    var vm = this;
    vm.toggleSidenav = toggleSidenav;

    function toggleSidenav() {
        $mdSidenav('leftnav').toggle();
    }
}

exports.TopNavCtrl = TopNavCtrl;