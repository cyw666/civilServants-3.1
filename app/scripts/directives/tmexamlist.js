'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmExamList
 * @description
 * # tmExamList
 */
angular.module('luZhouApp')
    .directive('tmExamList', function() {
        return {
            templateUrl: 'components/tmExamList.html',
            restrict: 'EA',
            transclude: {
                'pagation': 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {}
        };
    });