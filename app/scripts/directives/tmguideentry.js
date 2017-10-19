'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmGuideEntry
 * @description
 * # tmGuideEntry
 */
angular.module('luZhouApp')
    .directive('tmGuideEntry', function() {
        return {
            templateUrl: 'components/tmGuideEntry.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

            }
        };
    });