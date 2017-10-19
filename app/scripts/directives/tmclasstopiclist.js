'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassTopicList
 * @description
 * # tmClassTopicList
 */
angular.module('luZhouApp')
    .directive('tmClassTopicList', function() {
        return {
            templateUrl: 'components/tmClassTopicList.html',
            restrict: 'EA',
            transclude: {
                pagation: 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });