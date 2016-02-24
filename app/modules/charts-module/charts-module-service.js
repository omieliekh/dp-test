define([
    'app/modules/charts-module/charts-module'
], function (chartsModule) {
    'use strict';

    return chartsModule.service('chartsModuleService', [
        '$q',
        '$http',
        'chartsModuleConfig',
    function (
        $q,
        $http,
        chartsModuleConfig
    ) {

    }]);

});