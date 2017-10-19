'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmFooter
 * @description
 * # tmFooter
 */
angular.module('luZhouApp')
  .directive('tmFooter', function () {
    return {
      templateUrl: 'components/tmFooter.html',
      restrict: 'EA',
      transclude: true,
      controller: function ($scope, $http, $loading, commonService, $element, $attrs) {
        //友情链接
        commonService.getData(ALL_PORT.Blogroll.url, 'POST', ALL_PORT.Blogroll.data)
          .then(function (response) {
            $scope.firenlyLinkData = response.Data.ListData;
          })
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
