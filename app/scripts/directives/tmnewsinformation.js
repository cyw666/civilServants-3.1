'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNewsInformation
 * @description
 * # tmNewsInformation
 */
angular.module('luZhouApp')
    .directive('tmNewsInformation', function() {
        return {
            templateUrl: 'components/tmNewsInformation.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {


            }
        };
    });