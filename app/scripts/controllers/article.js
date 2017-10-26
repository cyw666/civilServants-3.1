'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('ArticleCtrl', function ($scope, $state, $rootScope, $cookieStore, commonService, $stateParams, $loading) {
    var categoryCode = $stateParams.categoryCode?$stateParams.categoryCode:'';
    var search = $stateParams.title?$stateParams.title:'';
    //分页
    var params = {
      page:1,
      rows:15,
      categoryId:'',
      CategoryCode:categoryCode,
      sort:'Sort',
      order:'desc',
      wordLimt:'20',
      titleNav:'文章列表',
      search:search
    };
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: 15});
    $scope.refreshList = function (options) {
      $loading.start('articleList');
      commonService.getData(ALL_PORT.ArticleList.url,'POST', $.extend(params,options))
        .then(function(response) {
          $loading.finish('articleList');
          $scope.articleListData = response.Data;
          var categoryName = response.Data.CategoryName;
          if(categoryName){
            $scope.articleTitle = categoryName;
          }else {
            $scope.articleTitle = response.Data.TitleNav;
          }
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    };
    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.refreshList(pageOptions);
    });
  
    //获取文章分类
    commonService.getData(ALL_PORT.ArticleCategory.url, 'POST',
      $.extend({}, ALL_PORT.ArticleCategory.data))
      .then(function (response) {
        $scope.categoryData = response.Data.ListData;
      });
    
  });
