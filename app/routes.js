define([], function () {
    'use strict';

    return {
        commonDeps: [
            'app/directives/menu/menu',
            'app/directives/responsive-chart/responsive-chart',
            'app/directives/square/square',
            'app/directives/chart/chart',
            'app/directives/map/map'
        ],
        routes: [
            {
                state: 'main',
                title: 'Main Page',
                url: "/",
                template: "<h1>Main page goes here</h1>"
            },
            {
                state: 'testModule',
                title: 'Test Module',
                url: "/test-module",
                templateUrl: "app/modules/test-module/test-module.html",
                deps: [
                    'app/modules/test-module/test-module',
                    'app/modules/test-module/test-module-config',
                    'app/modules/test-module/test-module-controller'
                ]
            },
            {
                state: 'chartsModule',
                title: 'Charts',
                url: "/charts-module",
                templateUrl: "app/modules/charts-module/charts-module.html",
                deps: [
                    'app/modules/charts-module/charts-module',
                    'app/modules/charts-module/charts-module-config',
                    'app/modules/charts-module/charts-module-controller'
                ]
            }
        ]
    };

});