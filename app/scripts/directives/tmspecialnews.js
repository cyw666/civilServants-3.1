'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmSpecialNews
 * @description
 * # tmSpecialNews
 */
angular.module('luZhouApp')
  .directive('tmSpecialNews', function () {
    return {
      templateUrl: 'components/tmSpecialNews.html',
      restrict: 'EA',
      scope:{
        specialNewsData:'=',
        categoryCode:'='
      },
      link: function postLink(scope, element, attrs) {
        scope.articleUrl = "article({categoryCode:'"+scope.categoryCode+"'})";
      }
    };
  });
