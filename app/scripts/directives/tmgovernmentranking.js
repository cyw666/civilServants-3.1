'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmGovernmentRanking
 * @description
 * # tmGovernmentRanking
 */
angular.module('luZhouApp')
    .directive('tmGovernmentRanking', function() {
        return {
            templateUrl: 'components/tmGovernmentRanking.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

            }
        };
    });