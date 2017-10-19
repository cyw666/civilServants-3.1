'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClassnoticeCtrl
 * @description
 * # classNoticeCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('classNoticeCtrl', function($scope, $loading, $stateParams, commonService) {
        $scope.Id = $stateParams.Id;
      
        //loading
        $loading.start('classMy');
        $loading.start('classNotice');
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
      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.ClassNoticeList.data.rows});


        //班级公告
        $scope.queryClassNotice = function(pageOptions) {
            commonService.getData(ALL_PORT.ClassNoticeList.url, 'POST', $.extend({}, ALL_PORT.ClassNoticeList.data, { Id: $scope.Id }, pageOptions))
                .then(function(response) {
                    $loading.finish('classNotice');
                    $scope.Data = response.Data;
                    $scope.paginationConf.totalItems = response.Data.Count;
                })
        }



        // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage', function() {
            // 发送给后台的请求数据
            var pageOptions = {
                page: $scope.paginationConf.currentPage,
            };

            $scope.queryClassNotice(pageOptions);

        });
    });
