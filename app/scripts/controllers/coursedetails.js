'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:CoursedetailsCtrl
 * @description
 * # CoursedetailsCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('CoursedetailsCtrl', function ($scope, $rootScope, $state, $cookieStore, commonService, $timeout, $loading, $stateParams, $location) {
    $scope.Id = $stateParams.Id;
    //显示loading
    $loading.start('courseDetails');
    $scope.token = commonService.AntiForgeryToken();
    $scope.showFav = true;
    var queryDetail = function () {
      var Id = $stateParams.Id;
      commonService.getData(ALL_PORT.CourseContent.url, 'POST', $.extend({}, ALL_PORT.CourseContent.data, {Id: Id}))
        .then(function (response) {
          $loading.finish('courseDetails');
          $scope.courseDetailsData = response.Data;
        });
    };
    queryDetail();
    
    $scope.favoriteAdd = function (options, token) {
      var params = $.extend({}, ALL_PORT.FavoriteAdd.data, options, token)
      commonService.getData(ALL_PORT.FavoriteAdd.url, 'POST', params)
        .then(function (response) {
          if (response.Type == 1) {
            $scope.courseDetailsData.CourseModel.FavoriteId = response.Value;
            commonService.alertMs(response.Message);
          }
        });
    };
    $scope.favoriteDelete = function (options, token) {
      var params = $.extend({}, ALL_PORT.FavoriteDelete.data, options, token)
      commonService.getData(ALL_PORT.FavoriteDelete.url, 'POST', params)
        .then(function (response) {
          if (response.Type == 1) {
            $scope.courseDetailsData.CourseModel.FavoriteId = 0;
            commonService.alertMs(response.Message);
          }
        });
    };

    $scope.selectClass = function (checkValue) {
      var newWindow = window.open('about:blank', '_blank');
      var params = $.extend({}, ALL_PORT.AddStudyCourse.data, {checkValue: checkValue}, $scope.token)
      commonService.getData(ALL_PORT.AddStudyCourse.url, 'POST', params)
        .then(function (response) {
          if (response.Type == 1) {
            //打开一个不被拦截的新窗口
            var url = $state.href('play', {Id: checkValue});
            newWindow.location.href = url;
          }else {
            newWindow.close();
          }
        });
    };

    //参加测试
    $scope.havTest = function (Id) {
      var newWindow = window.open('about:blank', '_blank');
      var params = $.extend({}, ALL_PORT.Exam.data, $scope.token, {parameter1: Id})
      commonService.getData(ALL_PORT.Exam.url, 'POST', params)
        .then(function (response) {
          $loading.finish('exam');
          if (response.Type) {
            newWindow.close();
            //Type存在，意味着不能考试
            commonService.alertMs(response.Message);
          } else {
            //打开一个不被拦截的新窗口
            var url = $state.href('exam', {Id: Id});
            newWindow.location.href = url;
          }
        });
    };
  
    //获取评论信息
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: 10});
    $scope.getComment = function (options) {
      var params = $.extend({}, ALL_PORT.CourseComment.data, {id: $scope.Id,page:1,rows:10},options)
      commonService.getData(ALL_PORT.CourseComment.url, 'POST',params)
        .then(function (response) {
          $scope.resultComment = response.Data;
          $scope.paginationConf.totalItems =  response.Data.Count;
        });
    }
    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function () {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.getComment(pageOptions);
    });
    
    //相关课程
    $scope.getRelatedCourse = function () {
      var params = $.extend({}, ALL_PORT.RelatedCourse.data, {Page: 1, Rows: 10 ,CourseId:$scope.Id})
      commonService.getData(ALL_PORT.RelatedCourse.url, 'POST',params)
        .then(function (response) {
          $scope.relatedCourseData = response.Data;
        });
    }
    $scope.getRelatedCourse();
  });
