require.config({
    paths: {
        'domReady': 'node_modules/domready/ready',
        'jquery': 'node_modules/jquery/dist/jquery',
        'angular': 'node_modules/angular/angular',
        'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router',
        'highcharts': 'node_modules/highcharts/highcharts',
        'module-map': 'http://code.highcharts.com/maps/modules/map',
        'world': 'http://code.highcharts.com/mapdata/custom/world',
        'highcharts-ng': 'node_modules/highcharts-ng/dist/highcharts-ng'
    },

    shim: {
        'jquery': { exports: 'jquery' },

        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },

        'angular-ui-router': {
            exports: 'angular-ui-router',
            deps: ['angular']
        },

        'module-map': {
            exports: 'module-map',
            deps: ['highcharts']
        },

        'world': {
            exports: 'world',
            deps: ['highcharts']
        },

        'highcharts': { exports: 'highcharts' },

        'highcharts-ng': {
            exports: 'highcharts-ng',
            deps: ['highcharts','module-map','world', 'angular']
        }
    }

});

/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'jquery',
    'angular',
    'app/routes',
    'angular-ui-router',
    'app/app'
], function (require, jquery, angular, routes) {
    'use strict';

    require(['domReady'].concat(routes.commonDeps), function (domReady) {
        domReady(function () {
            angular.bootstrap(document, ['app']);
        });
    });
});