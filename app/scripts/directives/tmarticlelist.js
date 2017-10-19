'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmArticleList
 * @description
 * # tmArticleList
 */
angular.module('luZhouApp')
  .directive('tmArticleList', function () {
    return {
      templateUrl: 'components/tmArticleList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
