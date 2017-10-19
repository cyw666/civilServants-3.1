'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:BookdetailCtrl
 * @description
 * # BookdetailCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('BookdetailCtrl', function ($scope, $state, $rootScope, $cookieStore, commonService, $stateParams, $loading) {

    $scope.token = commonService.AntiForgeryToken();
    $scope.Id = $stateParams.Id;

    //获取图书内容
    commonService.getData(ALL_PORT.BookContent.url,'POST',
      $.extend({}, ALL_PORT.BookContent.data,{id:$scope.Id}))
      .then(function(response) {
        $scope.bookContentData = response.Data;
      });
    //收藏
    $scope.favoriteAdd = function(options, token) {
      var params = $.extend({}, ALL_PORT.FavoriteAdd.data, options, token)
      commonService.getData(ALL_PORT.FavoriteAdd.url, 'POST', params)
        .then(function(response) {
          if (response.Type == 1) {
            $scope.bookContentData.FavoriteId = response.Value;
            commonService.alertMs(response.Message);
          } else {
            commonService.alertMs(response.Message);
          }
        });
    };
    //取消收藏
    $scope.favoriteDelete = function(options, token) {
      var params = $.extend({}, ALL_PORT.FavoriteDelete.data, options, token);
      commonService.getData(ALL_PORT.FavoriteDelete.url, 'POST', params)
        .then(function(response) {
          if (response.Type == 1) {
            $scope.bookContentData.FavoriteId = 0;
            commonService.alertMs(response.Message);
          }else {
            commonService.alertMs(response.Message);
          }
        });
    };
    //发表评论
    $scope.postComment = function(options) {
      commonService.limitSubmit(function () {
        if ($scope.bookContent.length < 7) {
          commonService.alertMs('评论内容字数不能少于7个字！');
          return;
        } else if ($scope.bookContent.length >= 249) {
          commonService.alertMs('评论内容字数不能超过249个字！');
          return;
        }
        var params = $.extend({}, ALL_PORT.BookCommentAdd.data, options, $scope.token)
        commonService.getData(ALL_PORT.BookCommentAdd.url, 'POST', params)
          .then(function(response) {
            $('.modal').modal('hide');
            if (response.Type == 1) {
              commonService.alertMs('评论成功！');
              $scope.getComment({page:1})
            }else {
              commonService.alertMs(response.Message);
            }
          });
      });

    };


    //获取评论
    $scope.getComment = function (options) {
      var params = $.extend({}, ALL_PORT.BookCommentList.data, {bookId:$scope.Id},options);
      commonService.getData(ALL_PORT.BookCommentList.url, 'POST', params)
        .then(function(response) {
          $scope.paginationConf.totalItems = response.Data.Count;
          $scope.commentData = response.Data;
        });
    };

    //分页
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.BookCommentList.data.rows});
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
      };
      $scope.getComment(pageOptions);

    });
  });
