'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmTrainingArticle
 * @description
 * # tmTrainingArticle
 */
angular.module('luZhouApp')
  .directive('tmTrainingArticle', function () {
    return {
      templateUrl: 'components/tmTrainingArticle.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {}
    };
  });
