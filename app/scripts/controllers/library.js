'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('LibraryCtrl', function ($scope, $rootScope, $cookieStore, commonService, $timeout, $loading, $stateParams) {
    //保持在线
    //commonService.keepOnline();
    //显示loading
    $loading.start('bookCategory');
    //图书分类
    commonService.getData(ALL_PORT.BookCategory.url, 'POST', ALL_PORT.BookCategory.data)
      .then(function (response) {
        $loading.finish('bookCategory');
        // $scope.bookCategory = response.Data.ListData;
        var allBook = [{
          id: 0,
          text: "全部图书",
        }]
        $scope.bookCategory = allBook.concat(response.Data.DataList);
      });
    //搜索图书
    var courseListParams = $.extend({}, ALL_PORT.BookList.data);
    $scope.paginationConf = $.extend({}, paginationConf, {itemsPerPage: courseListParams.rows});
    $scope.searchCategory = function (options) {
      $loading.start('library');
      $.extend(courseListParams, options);
      commonService.getData(ALL_PORT.BookList.url, 'POST', courseListParams)
        .then(function (response) {
          $loading.finish('library');
          $scope.booksData = response.Data;
          $scope.imgPath = response.Data.Path;
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    };
    //分页
    $scope.$watch('paginationConf.currentPage', function () {
      var pageOptions = {
        page: $scope.paginationConf.currentPage,
      };
      $scope.searchCategory(pageOptions);
    });
  });
