'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmArticleHot
 * @description
 * # tmArticleHot
 */
angular.module('luZhouApp')
  .directive('tmArticleHot', function () {
    return {
      templateUrl: 'components/tmArticleHot.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
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
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
