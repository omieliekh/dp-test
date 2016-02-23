define([
    'angular',
    'app/routes'
], function (angular, routes) {
    'use strict';

    return angular.module('app', [
        'ui.router'
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
                route.resolve = {
                    resolver: ['$q', function($q) {
                        var defer = $q.defer();

                        require(route.deps, function () {
                            defer.resolve(arguments);
                        });

                        return defer.promise;
                    }]
                };
            }

            $stateProvider.state(route.state, route);
        });

    }]);
});