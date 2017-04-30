(function () {
    angular.module("spaceApp")
        .controller("MicroCtrl", MicroCtrl);
    
    function MicroCtrl($http, $scope) {
        var vm = this;


        vm.energyExpenditure =[];
        vm.wattsDuration = "";

        vm.applianceArray = [
            {
                title: "Kettle",
                watts: 200
            },
            {
                title: "Air-conditioner",
                watts: 250
            },
            {
                title: "Laptop",
                watts: 100
            },
            {
                title: "Television",
                watts: 222
            }
        ];

        vm.addToExpenditure = function (applianceObj) {
            vm.energyExpenditure.push(applianceObj);
        };

        vm.calcWatts = function (idx, applianceObj, duration) {
            if (!duration) {
                duration = 0;
            }
            vm.energyExpenditure[idx].specificWatts = applianceObj.watts * (duration/60);
           return applianceObj.watts * (duration/60);
        };

        vm.totalExpenditure = function () {
            var totalArrayExpenditure = 0;
            for (var i = 0; i < vm.energyExpenditure.length; i++) {
                totalArrayExpenditure += vm.energyExpenditure[i].specificWatts;
                if (totalArrayExpenditure > vm.maxWatts) {
                    vm.warning = "YOUR EXPENDITURE HAS EXCEEDED OMGZ";
                }
                else {
                    vm.warning = "Your energy expenditure is doing fine!"
                }
            }
            return totalArrayExpenditure;
        };

        vm.delete = function (idx) {
            vm.energyExpenditure.splice(idx, 1);
        }

    }


    MicroCtrl.$inject = ["$http", "$scope"];
})();