'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmExamReview
 * @description
 * # tmExamReview
 */
angular.module('luZhouApp')
    .directive('tmExamReview', function() {
        return {
            templateUrl: 'components/tmExamReview.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {}
        };
    });