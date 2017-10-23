'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmArticleRead
 * @description
 * # tmArticleRead
 */
angular.module('luZhouApp')
  .directive('tmArticleRead', function () {
    return {
      templateUrl: 'components/tmArticleRead.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
