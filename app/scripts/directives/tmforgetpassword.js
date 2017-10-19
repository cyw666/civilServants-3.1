'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmForgetPassword
 * @description
 * # tmForgetPassword
 */
angular.module('luZhouApp')
    .directive('tmForgetPassword', function() {
        return {
            templateUrl: 'components/tmForgetPassword.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {}
        };
    });