define([
    'angular',
    'app/app'
], function (angular, app) {
    'use strict';

    return app.directive("map", [
        '$http',
        function (
            $http
        ) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'app/directives/map/map.html',
                scope: {},
                controller: function ($scope, $element, $attrs) {

                    var initialize = function () {

                    };

                    var countries = {
                            europe: 'France, Germany, Italy',
                            asia:   'Japan, China'
                        },
                        defaultSeriesData = {
                            allAreas: false,
                            name: '',
                            countries: '',
                            data: [],
                            dataLabels: {
                                enabled: true,
                                color: 'white',
                                formatter: function () {
                                    if (this.point.value) {
                                        return this.point.name;
                                    }
                                }
                            },
                            tooltip: {
                                enabled: true,
                                headerFormat: '',
                                pointFormat: '{point.name}: <b>{series.name}</b>'
                            }
                        };

                    $scope.makeSeries = function(name, countries) {
                        var seriesData = angular.copy(defaultSeriesData);

                        seriesData.name      = name;
                        seriesData.countries = countries;
                        seriesData.data      = $scope.makeSeriesData(countries);

                        return seriesData;
                    };

                    $scope.makeSeriesData = function(string) {
                        var list = ('' + string).split(','),
                            data = [];

                        list.forEach(function(country) {
                            data.push({
                                name:  country.trim(),
                                value: 1
                            });
                        });

                        return data;
                    };

                    $scope.setSeriesData = function(series, string) {
                        series.data = $scope.makeSeriesData(string);
                    };

                    $scope.addSeries = function() {
                        $scope.config.series.push($scope.makeSeries());
                    };

                    $scope.removeSeries = function(key) {
                        $scope.config.series.splice(key, 1);

                        if (1 == $scope.config.series.length) {
                            $scope.config.series[0].allAreas = true;
                        }
                    };

                    $scope.config = {
                        options: {
                            legend: {
                                enabled: false
                            },
                            plotOptions: {
                                map: {
                                    mapData: Highcharts.maps['custom/world'],
                                    joinBy: ['name']
                                }
                            },
                        },
                        chartType: 'map',
                        title: {
                            text: 'Map example'
                        },
                        series: [
                            $scope.makeSeries('Europe', countries.europe),
                            $scope.makeSeries('Asia', countries.asia)
                        ]
                    };

                    $scope.config.series[0].allAreas = true;

                    $scope.$on('$destroy', function(){

                    });

                    initialize();
                }
            };
        }]);

});