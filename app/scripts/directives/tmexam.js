'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmExam
 * @description
 * # tmExam
 */
angular.module('luZhouApp')
    .directive('tmExam', function() {
        return {
            templateUrl: 'components/tmExam.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {}
        };
    });