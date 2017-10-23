'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNavElevator
 * @description
 * # tmNavElevator
 */
angular.module('luZhouApp')
  .directive('tmNavElevator', function () {
    return {
      templateUrl: 'components/tmNavElevator.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        $(window).scroll(function() {
          if($(window).scrollTop() >= 300){
            $('.backToTop').fadeIn(500);
          }else{
            $('.backToTop').fadeOut(500);
          }
        });
        $('.nav-elevator .backToTop').click(function () {
          $('body,html').animate({scrollTop:0},800);
        });
        $('.qrCode').hover(function () {
          $('.weChartAppImg').show('500');
        },function () {
          $('.weChartAppImg').hide('500');
        })
      }
    };
  });
