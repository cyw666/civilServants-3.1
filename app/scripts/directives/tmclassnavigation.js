'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmclassnavigation
 * @description
 * # tmClassNavigation
 */
angular.module('luZhouApp')
    .directive('tmClassNavigation', function() {
        return {
            templateUrl: 'components/tmClassNavigation.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {
            }
        };
    });
