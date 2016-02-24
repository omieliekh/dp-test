define([
    'angular',
    'app/app'
], function (angular, app) {
    'use strict';

    var chartId = 0;

    return app.directive("chart", [
        '$http',
        '$timeout',
    function (
        $http,
        $timeout
    ) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/chart/chart.html',
            scope: {
                url: '@'
            },
            link: function (scope, element, attrs) {
                scope.types = [
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
                    scope.id = chartId++;
                };

                var getChartData = function () {
                    $http({
                        method: 'GET',
                        url: scope.url
                    }).then(function (response) {
                        if (response.data){
                            scope.config = response.data;

                            redrawChart();
                        }
                    });
                };

                var redrawChart = function () {
                    $timeout(function () {
                        element.find('[data-highcharts-chart]').highcharts().reflow();
                    }, 50);
                };

                scope.$on('$destroy', function(){

                });

                initialize();
            }
        };
    }]);

});