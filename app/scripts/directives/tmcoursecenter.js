'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCourseCenter
 * @description
 * # tmCourseCenter
 */
angular.module('luZhouApp')
    .directive('tmCourseCenter', function() {
        return {
            templateUrl: 'components/tmCourseCenter.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

            }
        };
    });