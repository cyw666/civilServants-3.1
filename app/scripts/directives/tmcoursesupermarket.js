'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCourseSupermarket
 * @description
 * # tmCourseSupermarket
 */
angular.module('luZhouApp')
  .directive('tmCourseSupermarket', function () {
    return {
      templateUrl: 'components/tmCourseSupermarket.html',
      restrict: 'EA',
      transclude: {
        'pagation': 'tm-pagation'
      },
      link: function (scope, element, attrs) {
        //排序方式
        $('.title_bar a').click(function () {
          if ($(this).children('span').html() == '▼') {
            $(this).children('span').html('▲');
            $(this).parent('span').siblings('span').children().children('span').html('▼');
          } else if ($(this).children('span').html() == '▲') {
            $(this).children('span').html('▼');
          }
        });
        //
        $('.searchBtn').click(function () {
          $('.title_bar .arrow').html('▼');
        })
      }
    };
  });
