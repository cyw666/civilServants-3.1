'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPhotoAlbunAdd
 * @description
 * # tmPhotoAlbumAdd
 */
angular.module('luZhouApp')
  .directive('tmPhotoAlbumAdd', function () {
    return {
      templateUrl: 'components/tmPhotoAlbumAdd.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
