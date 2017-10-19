'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNewsPhoto
 * @description
 * # tmNewsPhoto
 */
angular.module('luZhouApp')
    .directive('tmNewsPhoto', function() {
        return {
            templateUrl: 'components/tmNewsPhoto.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

            }
        };
    });