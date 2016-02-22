/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app/app',
    'app/app-config'
], function (require, angular) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});