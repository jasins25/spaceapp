(function () {
    angular.module("spaceApp")
        .controller("MacroCtrl", MacroCtrl);
    
    function MacroCtrl($http, $scope) {
        var vm = this;
        vm.radiation = [];
        vm.sunrise = [];
        vm.sunset = [];

        $http.get('js/radiation.json')
            .then(function (res) {
                vm.shop = res.data;
                console.info("radiation data: ", vm.radiation);
            });

        $http.get('js/sunrise.json')
            .then(function (res) {
                vm.shop = res.data;
                console.info("sunrise data: ", vm.sunrise);
            });

        $http.get('js/sunset.json')
            .then(function (res) {
                vm.shop = res.data;
                console.info("sunset data: ", vm.sunset);
            });

    }


    MacroCtrl.$inject = ["$http", "$scope"];
})();