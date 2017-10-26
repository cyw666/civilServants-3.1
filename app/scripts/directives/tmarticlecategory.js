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
      link: function postLink(scope, element, attrs) {
      }
    };
  });
