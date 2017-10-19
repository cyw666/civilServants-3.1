'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClassplanCtrl
 * @description
 * # classPlanCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('classPlanCtrl', function($scope, $loading, $stateParams, commonService) {
        $scope.Id = $stateParams.Id;
        //loading
        $loading.start('classMy');
        $loading.start('classPlan');
        $loading.start('personalLearningInfo');

        //个人学习信息
        var classInfomation = commonService.getData(ALL_PORT.ClassInformation.url, 'POST', $.extend({}, ALL_PORT.ClassInformation.data, { Id: $scope.Id }))
        classInfomation.then(function(response) {
            $loading.finish('personalLearningInfo');
            $scope.classInfoData = response.Data;
        });


        //我的班级
        var classMy = commonService.getData(ALL_PORT.ClassMy.url, 'POST', ALL_PORT.ClassMy.data);
        classMy.then(function(response) {
            $loading.finish('classMy');
            $scope.classMyData = response.Data;
        });


        //教学计划

        commonService.getData(ALL_PORT.ClassPlan.url, 'POST', $.extend({}, ALL_PORT.ClassPlan.data, { Id: $scope.Id }))
            .then(function(response) {
                $loading.finish('classPlan');
                $scope.classPlanData = response.Data;
            });

    });
