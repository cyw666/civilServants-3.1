'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ClasstopiclistCtrl
 * @description
 * # classTopicListCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
    .controller('classTopicListCtrl', function($scope, $loading, $stateParams, commonService) {
        $scope.Id = $stateParams.Id;
        //loading
        $loading.start('classMy');
        $loading.start('classTopicList');
        $loading.start('personalLearningInfo');

        //个人学习信息
        commonService.getData(ALL_PORT.ClassInformation.url, 'POST', $.extend({}, ALL_PORT.ClassInformation.data, { Id: $scope.Id }))
            .then(function(response) {
                $loading.finish('personalLearningInfo');
                $scope.classInfoData = response.Data;
            });


        //我的班级
        commonService.getData(ALL_PORT.ClassMy.url, 'POST', ALL_PORT.ClassMy.data)
            .then(function(response) {
                $loading.finish('classMy');
                $scope.classMyData = response.Data;
            });


        //分页
      $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.ClassTopicList.data.rows});

        //班级话题
        $scope.queryClassTopicList = function(pageOptions) {
            commonService.getData(ALL_PORT.ClassTopicList.url, 'POST', $.extend({}, ALL_PORT.ClassTopicList.data, { Id: $scope.Id }, pageOptions)).then(function(response) {
                $loading.finish('classTopicList');
                $scope.Data = response.Data;
                $scope.paginationConf.totalItems = response.Data.Count;
            });
        };

        // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage', function() {
            var pageOptions = {
                page: $scope.paginationConf.currentPage,
            };

            $scope.queryClassTopicList(pageOptions);

        });

    });
