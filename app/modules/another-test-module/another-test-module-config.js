define([
    'app/modules/another-test-module/another-test-module'
], function (anotherTestModule) {
    'use strict';

    return anotherTestModule.constant("anotherTestModuleConfig", {
        pathGetItems: '/some/server/path'
    });

});


