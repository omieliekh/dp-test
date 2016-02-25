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
                state: 'chartsModule',
                title: 'Home Page',
                url: "/",
                templateUrl: "app/modules/charts-module/charts-module.html",
                deps: [
                    'app/modules/charts-module/charts-module',
                    'app/modules/charts-module/charts-module-config',
                    'app/modules/charts-module/charts-module-controller'
                ]
            },
            {
                state: 'aboutApp',
                title: 'About this application',
                url: "/about-app",
                templateUrl: "app/modules/about-app/about-app.html",
                deps: [
                    'app/modules/about-app/about-app',
                    'app/modules/about-app/about-app-config',
                    'app/modules/about-app/about-app-controller'
                ]
            }
        ]
    };

});