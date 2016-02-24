define([
    'angular',
    'app/app'
], function (angular, app) {
    'use strict';

    return app.directive("responsiveChart", [
        '$window',
        '$timeout',
    function (
        $window,
        $timeout
    ) {
        return {
            restrict: 'A',
            replace: true,
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
                            console.log('reflow ', element.find('[data-highcharts-chart]'));
                            element.find('[data-highcharts-chart]').highcharts().reflow();
                        }, 400);

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