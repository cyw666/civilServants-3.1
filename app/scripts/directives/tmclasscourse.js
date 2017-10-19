'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassCourse
 * @description
 * # tmClassCourse
 */
angular.module('luZhouApp')
    .directive('tmClassCourse', function() {
        return {
            templateUrl: 'components/tmClassCourse.html',
            restrict: 'EA',
            transclude: {
                pagation: 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {}
        };
    });