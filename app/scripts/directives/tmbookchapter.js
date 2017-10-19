'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmBookChapter
 * @description
 * # tmBookChapter
 */
angular.module('luZhouApp')
  .directive('tmBookChapter', function () {
    return {
      templateUrl: 'components/tmBookChapter.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
