'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmshowarticledetail
 * @description
 * # tmShowArticleDetail
 */
angular.module('luZhouApp')
  .directive('tmShowArticleDetail', function () {
    return {
      templateUrl: 'components/tmShowArticleDetail.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
