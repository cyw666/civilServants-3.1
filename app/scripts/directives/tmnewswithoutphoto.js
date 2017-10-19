'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPolicyAndNotify
 * @description
 * # tmNewsWithoutPhoto
 */
angular.module('luZhouApp')
    .directive('tmNewsWithoutPhoto', function() {
        return {
            templateUrl: 'components/tmNewsWithoutPhoto.html',
            restrict: 'EA',
            scope: {
                myNewsData: '=myData'
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });