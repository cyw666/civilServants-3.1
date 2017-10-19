'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:UserrankinglistCtrl
 * @description
 * # UserrankinglistCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('UserrankinglistCtrl', function ($scope, $rootScope, $cookieStore, commonService, $timeout, $loading, $stateParams) {
    //防伪造请求
    $scope.token = commonService.AntiForgeryToken();
    //用户学时排行
    $loading.start('userRankingList');
    $scope.getUserRanking = function (options) {
      var params = $.extend({},ALL_PORT.RankUserList.data,options)
      commonService.getData(ALL_PORT.RankUserList.url, 'POST',params )
        .then(function(response) {
          $loading.finish('userRankingList');
          $scope.paginationConf.totalItems = response.Data.ViewBag.Count;
          $scope.userRankingData = response.Data;
        });
    }


    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.RankUserList.data.rows});

    //分页
    // 通过$watch currentPage 当他们一变化的时候，重新获取数据条目
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.getUserRanking(pageOptions);
    });
  });
