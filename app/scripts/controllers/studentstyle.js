'use strict';

/**
 * @ngdoc function
 * @name luZhouApp.controller:StudentstyleCtrl
 * @description
 * # StudentstyleCtrl
 * Controller of the luZhouApp
 */
angular.module('luZhouApp')
  .controller('StudentstyleCtrl', function ($scope, $http,$timeout, $rootScope, $cookieStore, commonService, $location, $loading) {

    //热门文章
    $scope.hotArticle = function () {
      $loading.start('articleHot');
      var options = {
        page:1,
        rows:10,
        sort:'ClickCount',
        order:'desc',
        categoryId:null,
        titleNav:'热门文章',
        wordLimt:35
      };
      commonService.getData(ALL_PORT.ArticleList.url,'POST',
        $.extend({}, ALL_PORT.ArticleList.data,options))
        .then(function(response) {
          $loading.finish('articleHot');
          $scope.hotArticleData = response.Data;
        });
    };
    $scope.hotArticle();

    //学员风采
    $scope.paginationConf = $.extend({},paginationConf,{itemsPerPage: 9});
    $scope.getStudentStyle = function (options) {
      $loading.start('studyStyle');
      commonService.getData(ALL_PORT.StudentStyle.url,'POST',
        $.extend({}, ALL_PORT.StudentStyle.data,options))
        .then(function(response) {
          $loading.finish('studyStyle');
          $scope.studyStyleData = response.Data;
          $scope.paginationConf.totalItems = response.Data.Count;
        });
    };

    $scope.$watch('paginationConf.currentPage', function() {
      var pageOptions = {
        page: $scope.paginationConf.currentPage
      };
      $scope.getStudentStyle(pageOptions);
    });


  });
