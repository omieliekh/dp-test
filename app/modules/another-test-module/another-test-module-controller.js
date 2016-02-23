define([
    'app/modules/another-test-module/another-test-module'
], function (anotherTestModule) {
    'use strict';

    return anotherTestModule.controller('anotherTestModuleController', [
        '$scope',
        'anotherTestModuleService',
    function (
        $scope,
        anotherTestModuleService
    ) {

    }]);

});