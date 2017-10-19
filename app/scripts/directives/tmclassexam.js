'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassExam
 * @description
 * # tmClassExam
 */
angular.module('luZhouApp')
    .directive('tmClassExam', function() {
        return {
            templateUrl: 'components/tmClassExam.html',
            restrict: 'EA',
            transclude: {
                pagation: 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {}
        };
    });