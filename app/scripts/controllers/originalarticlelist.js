'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:OriginalarticlelistCtrl
 * @description
 * # OriginalarticlelistCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('OriginalarticlelistCtrl', function ($scope, $http,$timeout, $rootScope, $cookieStore, commonService, $location, $loading) {

    //原创文章列表
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.OriginalArticleList.data.rows});
    $scope.requestOriginalArgicleList = function(options) {
      $loading.start('originalArgicleList');
      var params = $.extend({}, ALL_PORT.OriginalArticleList.data, options);
      commonService.getData(ALL_PORT.OriginalArticleList.url, 'POST', params)
        .then(function(response) {
          $loading.finish('originalArgicleList');
          $scope.paginationConf.totalItems = response.Data.Count;
          $scope.originalArgicleListData = response.Data;
        });
    };
    $scope.$watch('paginationConf.currentPage', function() {
      var options = {};
      options.page = $scope.paginationConf.currentPage;
      $scope.requestOriginalArgicleList(options);
    });
  });
