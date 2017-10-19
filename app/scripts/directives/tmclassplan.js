'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassPlan
 * @description
 * # tmClassPlan
 */
angular.module('luZhouApp')
    .directive('tmClassPlan', function() {
        return {
            templateUrl: 'components/tmClassPlan.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

            }
        };
    });