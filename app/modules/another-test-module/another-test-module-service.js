define([
    'app/modules/another-test-module/another-test-module'
], function (anotherTestModule) {
    'use strict';

    return anotherTestModule.service('anotherTestModuleService', [
        '$q',
        '$http',
        'anotherTestModuleConfig',
    function (
        $q,
        $http,
        anotherTestModuleConfig
    ) {

    }]);

});