'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmTryPlay
 * @description
 * # tmTryPlay
 */
angular.module('luZhouApp')
  .directive('tmTryPlay', function () {
    return {
      templateUrl: 'components/tmTryPlay.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        /*var toggle = 1;
         $('.toggleSideSec').click(function () {
         if (toggle === 0) {
         $('.play').hide();
         $('.playMp4').css('width', '99%');
         $('.toggleSideSec').css('right', '0');
         $(this).css('background', 'url("images/1.jpg")');
         toggle = 1
         } else {
         $('.play').show();
         $('.playMp4').css('width', '78%');
         $('.toggleSideSec').css('right', '21%');
         $(this).css('background', 'url("images/2.jpg")');
         toggle = 0
         }
         });*/
        // $(document).height();
        $('.playPage').css({'height':$(document).height()-22});
      }
    };
  });
