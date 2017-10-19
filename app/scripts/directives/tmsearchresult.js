'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmsearchresult
 * @description
 * # tmSearchResult
 */
angular.module('luZhouApp')
  .directive('tmSearchResult',function () {
    return {
      templateUrl: 'components/tmSearchResult.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
