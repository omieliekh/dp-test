define([
    'app/app',
    'app/routes'
], function (app, routes) {
    'use strict';

    console.log('app.directive menu');

    return app.directive("menu", [
        '$timeout',
    function (
        $timeout
    ) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/menu/menu.html',
            scope: {},
            controller: function ($scope, $element, $attrs) {

                $scope.routes = routes;

                $scope.$on('$destroy', function(){

                });
            }
        };
    }]);

});