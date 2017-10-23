'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmStudyHelp
 * @description
 * # tmStudyHelp
 */
angular.module('luZhouApp')
  .directive('tmStudyHelp', function () {
    return {
      templateUrl: 'components/tmStudyHelp.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
