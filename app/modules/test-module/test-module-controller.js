define([
    'app/modules/test-module/test-module'
], function (testModule) {
    'use strict';

    testModule.controller('testModuleController', [
        '$scope',
        'testModuleService',
    function (
        $scope,
        testModuleService
    ) {

    }]);

});






angular.module('testModule')

.controller('testModuleController', [
    '$scope',
    'testModuleService',
function (
    $scope,
    testModuleService
) {

}]);