'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:BookchapterCtrl
 * @description
 * # BookchapterCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('BookchapterCtrl', function ($scope, $state, $rootScope, $cookieStore, commonService, $stateParams, $loading) {
    $scope.bookId = $stateParams.bookId;
    //获取图书章节
    $scope.getBookChapter = function (options) {
      $loading.start('bookChapter');
      var params = $.extend({}, ALL_PORT.BookChapterList.data, {bookId:$scope.bookId},options);
      commonService.getData(ALL_PORT.BookChapterList.url,'POST',params)
        .then(function(response) {
          $loading.finish('bookChapter');
          $scope.bookChapterData = response.Data;
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    }


    //分页
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: ALL_PORT.BookChapterList.data.rows});
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
      };
      $scope.getBookChapter(pageOptions);

    });
  });
