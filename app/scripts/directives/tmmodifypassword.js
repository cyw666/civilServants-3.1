'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmmodifypassword
 * @description
 * # tmModifyPassword
 */
angular.module('luZhouApp')
    .directive('tmModifyPassword', function() {
        return {
            templateUrl: 'components/tmModifyPassword.html',
            restrict: 'EA',
            link: function postLink(scope, element, attrs) {

            }
        };
    });