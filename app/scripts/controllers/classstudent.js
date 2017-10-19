'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClassstudentCtrl
 * @description
 * # classStudentCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('classStudentCtrl', function($scope, $loading, $stateParams, commonService) {
        $scope.Id = $stateParams.Id;
        //loading
        $loading.start('classMy');
        $loading.start('classStudent');
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


        //分页
      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.ClassStudent.data.rows});

        //同学名录
        $scope.queryClassStudent = function(pageOptions) {
            commonService.getData(ALL_PORT.ClassStudent.url, 'POST', $.extend({}, ALL_PORT.ClassStudent.data, { Id: $scope.Id }, pageOptions))
                .then(function(response) {
                    $loading.finish('classStudent');
                    $scope.classStudentData = response.Data;
                    $scope.paginationConf.totalItems = response.Data.Pass;
                });
        }

        // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage', function() {
            // 发送给后台的请求数据
            var pageOptions = {
                page: $scope.paginationConf.currentPage,
            };

            $scope.queryClassStudent(pageOptions);

        });
    });
