(function () {
    angular.module("spaceApp")
        .controller("MacroCtrl", MacroCtrl);

    function MacroCtrl($http, $scope, Service) {

        var vm = this;
        var sortedRad = [];

        vm.radiation = Service.radiation;
        vm.sunrise = Service.sunrise;
        vm.sunset = Service.sunset;
        vm.dailyAveRad = Service.dailyAveRad; // array that holds ave irradiance per day

        rad = vm.radiation;
        console.info("rad", rad);

        vm.totalEnergyOP = rad.map(function (rad) {
            return (rad.radiation * 0.2 * markerCount);
        });
        console.log("total", vm.totalEnergyOP);


        // Radiation gauge
        vm.g = new JustGage({
            id: "gauge",
            value: getRandomInt(350, 980),
            min: 0,
            max: 1750,
            title: "Solar Radiation",
            label: "Irradiance (W/m^2)"
        });

    }


    MacroCtrl.$inject = ["$http", "$scope", "Service"];
})();