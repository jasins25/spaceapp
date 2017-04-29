(function () {
    angular.module("spaceApp")
        .controller("MicroCtrl", MicroCtrl);
    
    function MicroCtrl($http, $scope) {
        var vm = this;

        // vm.totalExpenditure = function () {
        //     // console.log("vm.cartListArray: " + JSON.stringify(vm.cartListArray));
        //     var totalArrayExpenditure = 0;
        //     for (var i = 0; i < vm.expenditureListArray.length; i++) {
        //         totalArrayExpenditure += vm.expenditureListArray[i].watts;
        //     }
        //     return totalArrayExpenditure;
        // };
    }


    MicroCtrl.$inject = ["$http", "$scope"];
})();