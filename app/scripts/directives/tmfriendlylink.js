'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmFriendlyLink
 * @description
 * # tmFriendlyLink
 */
angular.module('luZhouApp')
    .directive('tmFriendlyLink', function() {
        return {
            templateUrl: 'components/tmFriendlyLink.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

            }
        };
    });