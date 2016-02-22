define(['app/app'], function (app) {
    'use strict';

    app.config([
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

        $stateProvider
            .state('testModule', {
                url: "/test-module",
                templateUrl: "app/modules/test-module/test-module.html"
            })
        ;

    }]);

});