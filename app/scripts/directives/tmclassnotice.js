'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassNotice
 * @description
 * # tmClassNotice
 */
angular.module('luZhouApp')
    .directive('tmClassNotice', function() {
        return {
            templateUrl: 'components/tmClassNotice.html',
            restrict: 'EA',
            transclude: {
                pagation: 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {}
        };
    });