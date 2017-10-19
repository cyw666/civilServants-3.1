'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmclassStudent
 * @description
 * # tmClassStudent
 */
angular.module('luZhouApp')
    .directive('tmClassStudent', function() {
        return {
            templateUrl: 'components/tmClassStudent.html',
            restrict: 'EA',
            transclude: {
                pagation: 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });