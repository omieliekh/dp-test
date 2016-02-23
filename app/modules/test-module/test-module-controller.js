define([
    'app/modules/test-module/test-module'
], function (testModule) {
    'use strict';

    return testModule.controller('testModuleController', [
        '$scope',
        'testModuleService',
    function (
        $scope,
        testModuleService
    ) {

    }]);

});