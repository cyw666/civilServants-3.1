'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPollReview
 * @description
 * # tmPollReview
 */
angular.module('luZhouApp')
  .directive('tmPollReview', function () {
    return {
      templateUrl: 'components/tmPollReview.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
