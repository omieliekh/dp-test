define([
    'angular',
    'app/modules/test-module/test-module'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'ui.router',
        'testModule'
    ]);
});