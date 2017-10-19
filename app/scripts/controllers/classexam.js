'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClassexamCtrl
 * @description
 * # classExamCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('classExamCtrl', function($scope, $loading, $stateParams, commonService,$state) {
        $scope.Id = $stateParams.Id;
        //loading
        $loading.start('classMy');
        $loading.start('classDetail');
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
      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.ClassExam.data.rows});

        //班级考试
        $scope.queryClassExam = function(pageOptions) {
            commonService.getData(ALL_PORT.ClassExam.url, 'POST', $.extend({}, ALL_PORT.ClassExam.data, { Id: $scope.Id }, pageOptions))
                .then(function(response) {
                    $loading.finish('classDetail');
                    $scope.Data = response.Data;
                    $scope.paginationConf.totalItems = response.Data.Count;
                });
        };



        // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage', function() {
            // 发送给后台的请求数据
            var pageOptions = {
                page: $scope.paginationConf.currentPage,
            };

            $scope.queryClassExam(pageOptions);

        });

        //参加测试
        $scope.havTest = function(Id) {
            var params = $.extend({}, ALL_PORT.Exam.data, $scope.token, { parameter1: Id })
            commonService.getData(ALL_PORT.Exam.url, 'POST', params)
                .then(function(response) {
                    if (response.Type) {
                        //Type存在，意味着不能考试
                        commonService.alertMs(response.Message);
                    } else {
                        // window.open("#/exam/exam/" + Id);
                      var newWindow = window.open('about:blank', '_blank');
                      var examUrl = $state.href('exam',{Id:Id});
                      newWindow.location.href = examUrl;
                    }
                });
        };



    });
