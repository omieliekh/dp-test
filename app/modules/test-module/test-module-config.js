define([
    'app/modules/test-module/test-module'
], function (testModule) {
    'use strict';

    testModule.constant("testModuleConfig", {
        pathGetItems: '/some/server/path'
    });

});


