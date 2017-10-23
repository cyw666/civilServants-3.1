'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCaseGuideArticle
 * @description
 * # tmCaseGuideArticle
 */
angular.module('luZhouApp')
  .directive('tmCaseGuideArticle', function () {
    return {
      templateUrl: 'components/tmCaseGuideArticle.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
