(function () {
    angular.module("spaceApp")
        .controller("MacroCtrl", MacroCtrl);

    function MacroCtrl($http, $scope, Service, $rootscope) {

        var vm = this;
        vm.radiation = Service.radiation;
        vm.sunrise = Service.sunrise;
        vm.sunset = Service.sunset;

        vm.dailyData = [];  // holds average daily irradiance and maybe other data in the future
      
        rad = vm.radiation;
        console.info("rad",rad);

        total = function(value) {
            return (value.radiation * 0.2 * markerCount);
        }



        vm.totalEnergyOP = rad.map(total);
        console.log("total", vm.totalEnergyOP);

counting = markerCount;
        vm.g = new JustGage({
            id: "gauge",
            value: getRandomInt(350, 980),
            min: 0,
            max: 1750,
            title: "Solar Radiation",
            label: "Irradiance (W/m^2)"
        });


        var A = [
            {
                "id": 1,
                "unixTime": 1475315718,
                "date": "2016-09-30",
                "time": "23:55:18",
                "radiation": 1.27,
                "radiationText": ""
            },
            {
                "id": 2,
                "unixTime": 1475315423,
                "date": "2016-09-30",
                "time": "23:50:23",
                "radiation": 1.25,
                "radiationText": ""
            },
            {
                "id": 3,
                "unixTime": 1475315124,
                "date": "2016-09-30",
                "time": "23:45:24",
                "radiation": 1.25,
                "radiationText": ""
            },
            {
                "id": 4,
                "unixTime": 1475314821,
                "date": "2016-09-30",
                "time": "23:40:21",
                "radiation": 1.25,
                "radiationText": ""
            },
            {
                "id": 5,
                "unixTime": 1475314522,
                "date": "2016-09-30",
                "time": "23:35:22",
                "radiation": 1.27,
                "radiationText": ""
            },
            {
                "id": 6,
                "unixTime": 1475314227,
                "date": "2016-09-30",
                "time": "23:30:27",
                "radiation": 1.29,
                "radiationText": ""
            },
            {
                "id": 7,
                "unixTime": 1475313921,
                "date": "2016-09-30",
                "time": "23:25:21",
                "radiation": 1.23,
                "radiationText": ""
            },
            {
                "id": 8,
                "unixTime": 1475313621,
                "date": "2016-09-30",
                "time": "23:20:21",
                "radiation": 1.25,
                "radiationText": ""
            },
            {
                "id": 9,
                "unixTime": 1475313321,
                "date": "2016-09-30",
                "time": "23:15:21",
                "radiation": 1.27,
                "radiationText": ""
            },
            {
                "id": 10,
                "unixTime": 1475313024,
                "date": "2016-09-30",
                "time": "23:10:24",
                "radiation": 1.24,
                "radiationText": ""
            },
            {
                "id": 11,
                "unixTime": 1475312722,
                "date": "2016-09-29",
                "time": "23:05:22",
                "radiation": 1.26,
                "radiationText": ""
            },
            {
                "id": 12,
                "unixTime": 1475312426,
                "date": "2016-09-29",
                "time": "23:00:26",
                "radiation": 1.26,
                "radiationText": ""
            },
            {
                "id": 13,
                "unixTime": 1475312123,
                "date": "2016-09-29",
                "time": "22:55:23",
                "radiation": 1.28,
                "radiationText": ""
            },
            {
                "id": 14,
                "unixTime": 1475311823,
                "date": "2016-09-29",
                "time": "22:50:23",
                "radiation": 1.25,
                "radiationText": ""
            },
            {
                "id": 15,
                "unixTime": 1475311522,
                "date": "2016-09-29",
                "time": "22:45:22",
                "radiation": 1.27,
                "radiationText": ""
            }
        ];

        getAveDailyIrradiance();
        function getAveDailyIrradiance() {
            var i, j = 0;
            var instanceCount = 0; // holds number of irradiance data per day
            var dailySum = 0; // irradiance sum per day
            var pastDate = A[0].date;

            console.log("past date " + pastDate);
            console.log("current date " + pastDate);
            for(var i=0; i < A.length; i++){

                // console.log("i " + i);
                // console.log(A[i].date);

                console.log("i " + i);
                console.log("date " + A[i].date);
                console.log("radiation " + A[i].radiation);
                if ((pastDate != A[i].date) || ((A.length == i + 1))) {
                    vm.dailyData[j] = dailySum / instanceCount;


                    console.log("dailySum " + dailySum);
                    console.log("instanceCount " + instanceCount);
                    console.log("daily ave for j " + j + " is " + vm.dailyData[j]);

                    instanceCount = 0;
                    dailySum = 0;
                    j++;
                    pastDate = A[i].date;
                }

                dailySum += A[i].radiation;
                instanceCount++;

            }


        }




    }


    MacroCtrl.$inject = ["$http", "$scope", "Service"];
})();