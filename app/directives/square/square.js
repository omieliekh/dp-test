define([
    'angular',
    'app/app'
], function (angular, app) {
    'use strict';

    return app.directive("square", [
        '$window',
        '$timeout',
    function (
        $window,
        $timeout
    ) {
        return {
            restrict: 'A',
            replace: true,
            scope: {},
            link: function (scope, element, attrs) {
                var jWindow = angular.element($window);

                var initialize = function () {
                    jWindow.on('resize', onWindowResize);

                    onWindowResize();
                };

                var onWindowResize = (function () {
                    var timeout;

                    return function () {
                        $timeout.cancel(timeout);

                        timeout = $timeout(function () {
                            var h = element.width() * 0.75;

                            if (h > 0){
                                element.height(h);
                                element.find('div').height(h);
                            }
                        }, 50);

                    };
                })();

                scope.$on('$destroy', function(){
                    jWindow.off('resize', onWindowResize);
                });

                initialize();
            }
        };
    }]);

});