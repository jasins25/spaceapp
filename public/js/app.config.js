(function () {
    angular
        .module("spaceApp")
        .config(MyAppConfig);
    MyAppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function MyAppConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('macro', {
                url: '/macro',
                templateUrl: '../templates/macro.html',
                controller: 'MacroCtrl',
                controllerAs: 'ctrl'
            })
            .state('micro', {
                url: '/micro',
                templateUrl: '../templates/micro.html',
                controller: 'MicroCtrl',
                controllerAs: 'ctrl'
            });

        $urlRouterProvider.otherwise("/macro");
    }
})();