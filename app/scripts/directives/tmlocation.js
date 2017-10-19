'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmlocation
 * @description
 * # tmLocation
 */
angular.module('luZhouApp')
    .directive('tmLocation', function() {
        return {
            templateUrl: 'components/tmLocation.html',
            restrict: 'EA',
            controller: function($scope) {
                $scope.reg = new RegExp("内容");
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });