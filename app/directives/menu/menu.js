define([
    'app/app',
    'app/routes'
], function (app, routes) {
    'use strict';

    return app.directive("menu", [
        '$location',
    function (
        $location
    ) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/menu/menu.html',
            scope: {},
            controller: function ($scope, $element, $attrs) {

                $scope.routes = routes;
                $scope.path = $location.path();

                $scope.$on("$locationChangeSuccess",function(e) {
                    $scope.path = $location.path();
                });

                $scope.$on('$destroy', function(){

                });
            }
        };
    }]);

});