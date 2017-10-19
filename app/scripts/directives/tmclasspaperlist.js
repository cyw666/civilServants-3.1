'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassPaperList
 * @description
 * # tmClassPaperList
 */
angular.module('luZhouApp')
    .directive('tmClassPaperList', function() {
        return {
            templateUrl: 'components/tmClassPaperList.html',
            restrict: 'EA',
            transclude: {
                pagation: 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {}
        };
    });