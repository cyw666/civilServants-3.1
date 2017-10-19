'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmunreadnotice
 * @description
 * # tmUnReadNotice
 */
angular.module('luZhouApp')
  .directive('tmUnReadNotice', function () {
    return {
      templateUrl: 'components/tmUnReadNotice.html',
      restrict: 'EA',
      transclude: {
          'pagation':'tm-pagation'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
