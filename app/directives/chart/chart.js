define([
    'app/app'
], function (app) {
    'use strict';

    var chartId = 0;

    return app.directive("chart", [
        '$http',
    function (
        $http
    ) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/chart/chart.html',
            scope: {
                url: '@'
            },
            controller: function ($scope, $element, $attrs) {
                $scope.types = [
                    {
                        label: 'areaspline',
                        value: 'areaspline'
                    },
                    {
                        label: 'barchart',
                        value: 'column'
                    },
                    {
                        label: 'linechart',
                        value: 'line'
                    }
                ];

                var initialize = function () {
                    getChartData();
                    $scope.id = chartId++;
                };

                var getChartData = function () {
                    $http({
                        method: 'GET',
                        url: $scope.url
                    }).then(function (response) {
                        if (response.data){
                            $scope.config = response.data;
                        }
                    });
                };

                $scope.$on('$destroy', function(){

                });

                initialize();
            }
        };
    }]);

});