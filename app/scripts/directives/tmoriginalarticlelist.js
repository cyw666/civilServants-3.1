'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmOriginalArticleList
 * @description
 * # tmOriginalArticleList
 */
angular.module('luZhouApp')
  .directive('tmOriginalArticleList', function () {
    return {
      templateUrl: 'components/tmOriginalArticleList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
