'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmMyFavorite
 * @description
 * # tmMyFavorite
 */
angular.module('luZhouApp')
    .directive('tmMyFavorite', function() {
        return {
            templateUrl: 'components/tmMyFavorite.html',
            restrict: 'EA',
            transclude: {
                'pagation': 'tm-pagation'
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });