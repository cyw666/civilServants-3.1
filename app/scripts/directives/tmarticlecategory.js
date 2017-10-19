'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmArticleCategory
 * @description
 * # tmArticleCategory
 */
angular.module('luZhouApp')
  .directive('tmArticleCategory', function () {
    return {
      templateUrl: 'components/tmArticleCategory.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        //获取文章分类
        commonService.getData(ALL_PORT.ArticleCategory.url, 'POST',
          $.extend({}, ALL_PORT.ArticleCategory.data))
          .then(function (response) {
            $scope.categoryData = response.Data;
          });
      },
      scope:{
        refreshList:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
