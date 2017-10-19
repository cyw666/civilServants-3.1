'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmsecuritysetting
 * @description
 * # tmSecuritySetting
 */
angular.module('luZhouApp')
  .directive('tmSecuritySetting', function () {
    return {
      templateUrl: 'components/tmSecuritySetting.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
