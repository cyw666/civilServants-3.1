'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmMessageList
 * @description
 * # tmMessageList
 */
angular.module('luZhouApp')
    .directive('tmMessageList', function() {
        return {
            templateUrl: 'components/tmMessageList.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {}
        };
    });