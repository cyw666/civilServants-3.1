'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNoticeList
 * @description
 * # tmNoticeList
 */
angular.module('luZhouApp')
  .directive('tmNoticeList', function () {
    return {
      templateUrl: 'components/tmNoticeList.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
