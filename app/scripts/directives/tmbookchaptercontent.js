'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmBookChapterContent
 * @description
 * # tmBookChapterContent
 */
angular.module('luZhouApp')
  .directive('tmBookChapterContent', function () {
    return {
      templateUrl: 'components/tmBookChapterContent.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
