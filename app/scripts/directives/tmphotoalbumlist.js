'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPhotoAlbumList
 * @description
 * # tmPhotoAlbumList
 */
angular.module('luZhouApp')
  .directive('tmPhotoAlbumList', function () {
    return {
      templateUrl: 'components/tmPhotoAlbumList.html',
      restrict: 'EA',
	    transclude: {
		    'pagation':'tm-pagation'
	    },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
