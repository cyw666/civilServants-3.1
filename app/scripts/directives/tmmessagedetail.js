'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmMessageDetail
 * @description
 * # tmMessageDetail
 */
angular.module('luZhouApp')
    .directive('tmMessageDetail', function() {
        return {
            templateUrl: 'components/tmMessageDetail.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {}
        };
    });