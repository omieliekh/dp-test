define([
    'app/modules/test-module/test-module'
], function (testModule) {
    'use strict';

    return testModule.service('testModuleService', [
        '$q',
        '$http',
        'testModuleConfig',
    function (
        $q,
        $http,
        testModuleConfig
    ) {

    }]);

});