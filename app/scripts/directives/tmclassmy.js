'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassMy
 * @description
 * # tmClassMy
 */
angular.module('luZhouApp')
  .directive('tmClassMy', function () {
    return {
      templateUrl: 'components/tmClassMy.html',
      restrict: 'EA',
      scope: {
        classMyData: "=",
        classType: "="
      },
      link: function postLink(scope, element, attrs) {
        scope.classUrl = "classlist({type:'"+scope.classType+"'})";
      }
    };
  });
