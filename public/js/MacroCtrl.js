(function () {
    angular.module("spaceApp")
        .controller("MacroCtrl", MacroCtrl);
    
    function MacroCtrl($http, $scope, Service) {
        var vm = this;
        vm.radiation = Service.radiation;
        vm.sunrise = Service.sunrise;
        vm.sunset = Service.sunset;

      
        rad = vm.radiation;
        console.info("rad",rad);

        vm.totalEnergyOP = rad.map(function(rad){
            return (rad.radiation * 0.2 * markerCount);
        });
        console.log("total", vm.totalEnergyOP);

    }


    MacroCtrl.$inject = ["$http", "$scope", "Service"];
})();