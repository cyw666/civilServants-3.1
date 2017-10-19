'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmOriginalArticle
 * @description
 * # tmOriginalArticle
 */
angular.module('luZhouApp')
  .directive('tmOriginalArticle', function () {
    return {
      templateUrl: 'components/tmOriginalArticle.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
