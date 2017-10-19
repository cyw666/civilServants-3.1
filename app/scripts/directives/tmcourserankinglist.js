'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCourseRankingList
 * @description
 * # tmCourseRankingList
 */
angular.module('luZhouApp')
    .directive('tmCourseRankingList', function() {
        return {
            templateUrl: 'components/tmCourseRankingList.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {}
        };
    });