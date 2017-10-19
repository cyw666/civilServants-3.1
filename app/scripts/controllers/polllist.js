'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:PolllistCtrl
 * @description
 * # PolllistCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('PolllistCtrl', function ($scope, $location, $rootScope,$state, $cookieStore, commonService, $timeout, $loading,$stateParams) {
    //报名状态
    $scope.JudgeStatus = commonService.JudgeStatus;
    //问卷调查列表
    $scope.getClassList = function(options) {
      $loading.start('pollList');
      ;
      commonService.getData( ALL_PORT.PollList.url, 'POST',
        $.extend({},ALL_PORT.PollList.data, options))
        .then(function(response) {
          $loading.finish('pollList');
          $scope.paginationConf.totalItems = response.Data.UnFinishCount;
          $scope.pollListData = response.Data;
        });
    };

    //分页
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.CourseClickList.data.rows});
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.getClassList(pageOptions);
    });
  
    //参加调查
    $scope.havTest = function (Id) {
      //打开一个不被拦截的新窗口
      var newWindow = window.open('about:blank', '_blank');
      var params = $.extend({}, ALL_PORT.Exam.data, $scope.token, {parameter1: Id})
      commonService.getData(ALL_PORT.Exam.url, 'POST', params)
        .then(function (response) {
          if (response.Type) {
            newWindow.close();
            //Type存在，意味着不能考试
            commonService.alertMs(response.Message);
          } else {
            var pollUrl = $state.href('poll',{Id:Id});
            newWindow.location.href = pollUrl;
          }
        
        });
    };
  });
