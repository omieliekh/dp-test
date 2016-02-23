require.config({

    // alias libraries paths
    paths: {
        'domReady': 'node_modules/domready/ready',
        'angular': 'node_modules/angular/angular',
        'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            exports: 'angular-ui-router',
            deps: ['angular']
        }
    }

});

/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app/routes',
    'angular-ui-router',
    'app/app'
], function (require, angular, routes) {
    'use strict';

    require(['domReady'].concat(routes.commonDeps), function (domReady) {
        domReady(function () {
            angular.bootstrap(document, ['app']);

            console.log('render');
        });
    });
});