define([
    'angular',
    'app/routes',
    'highcharts-ng'
], function (angular, routes) {
    'use strict';

    return angular.module('app', [
        'ui.router',
        'highcharts-ng'
    ]).config([
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
    function (
        $locationProvider,
        $stateProvider,
        $urlRouterProvider
    ) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        routes.routes.forEach(function (route) {
            if (route.deps){
                route.resolve = ['$q', function($q) {
                    var defer = $q.defer();

                    require(route.deps, defer.resolve);

                    return defer.promise;
                }];
            }

            $stateProvider.state(route.state, route);
        });

    }]);
});