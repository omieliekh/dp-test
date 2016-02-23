define([
    'app/app'
], function (app, routes) {
    'use strict';

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

                var initialize = function () {
                    getChartData();
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