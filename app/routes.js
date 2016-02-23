define([], function () {
    'use strict';

    return {
        commonDeps: [
            'app/directives/menu/menu'
        ],
        routes: [
            {
                state: 'main',
                title: 'Main Page',
                url: "/",
                template: "<h1>Main page goes here</h1>"
            },
            {
                state: 'testModule',
                title: 'Test Module',
                url: "/test-module",
                templateUrl: "app/modules/test-module/test-module.html",
                deps: [
                    'app/modules/test-module/test-module',
                    'app/modules/test-module/test-module-config',
                    'app/modules/test-module/test-module-controller'
                ]
            },
            {
                state: 'anotherTestModule',
                title: 'Another Test Module',
                url: "/another-test-module",
                templateUrl: "app/modules/another-test-module/another-test-module.html",
                deps: [
                    'app/modules/another-test-module/another-test-module',
                    'app/modules/another-test-module/another-test-module-config',
                    'app/modules/another-test-module/another-test-module-controller'
                ]
            }
        ]
    };

});