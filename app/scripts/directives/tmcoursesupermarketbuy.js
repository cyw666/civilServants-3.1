'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmCourseSupermarketBuy
 * @description
 * # tmCourseSupermarketBuy
 */
angular.module('luZhouApp')
  .directive('tmCourseSupermarketBuy', function () {
    return {
      templateUrl: 'components/tmCourseSupermarketBuy.html',
      restrict: 'EA',
      transclude: {
        'pagation': 'tm-pagation'
      },
      link: function(scope, element, attrs) {
        //排序方式
        $('.title_bar a').click(function(){
          if ($(this).children('span').html()=='▼'){
            $(this).children('span').html('▲');
            $(this).parent('span').siblings('span').children().children('span').html('▼');
          }else if ($(this).children('span').html()=='▲'){
            $(this).children('span').html('▼');
          }
        });

      }
    };
  });
