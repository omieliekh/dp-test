define([
    'app/modules/charts-module/charts-module'
], function (chartsModule) {
    'use strict';

    return chartsModule.constant("chartsModuleConfig", {
        pathGetItems: '/some/server/path'
    });

});


