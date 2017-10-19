'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPhotoPreview
 * @description
 * # tmPhotoPreview
 */
angular.module('luZhouApp')
  .directive('tmPhotoPreview', function () {
    return {
      templateUrl: 'components/tmPhotoPreview.html',
      restrict: 'EA',
      transclude:{
          pagation:'tm-pagation'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
