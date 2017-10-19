'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:SearchresultCtrl
 * @description
 * # searchResultCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('searchResultCtrl', function ($scope, $location, $loading, $stateParams, commonService) {
    $loading.start('tmsearchresult');

    $scope.isResult = true;

    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: 20});
    $scope.$watch('paginationConf.currentPage', function () {
      // 发送给后台的请求数据
      commonService.getData(ALL_PORT.SearchAll.url, 'POST',
        $.extend({}, ALL_PORT.SearchAll.data, {
          page: $scope.paginationConf.currentPage,
          rows: $scope.paginationConf.itemsPerPage,
          key: $stateParams.text
        }))
        .then(function (response) {
          $loading.finish('tmsearchresult');
          $scope.Data = response.Data;
          $scope.newsData = response.Data.ListData;
          $scope.paginationConf.totalItems = response.Data.ListData.length;

        });

    });


  });
