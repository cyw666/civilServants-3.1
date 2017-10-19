'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmStudyPlan
 * @description
 * # tmStudyPlan
 */
angular.module('luZhouApp')
  .directive('tmStudyPlan', function () {
    return {
      templateUrl: 'components/tmStudyPlan.html',
      restrict: 'EA',
      transclude: {
        'pagation':'tm-pagation'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
