(function () {
    angular.module("spaceApp")
        .controller("MacroCtrl", MacroCtrl);
    
    function MacroCtrl($http, $scope, Service) {
        var vm = this;
        vm.radiation = Service.radiation;
        vm.sunrise = Service.sunrise;
        vm.sunset = Service.sunset;

      
        rad = vm.radiation;
        console.info(vm.radiation);
        total = rad.map(function(rad){
            return (rad.radiation * markerCount * 1 * 0.20);
        });
        console.log("total", total);

    }


    MacroCtrl.$inject = ["$http", "$scope", "Service"];
})();