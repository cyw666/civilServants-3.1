'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmPlay
 * @description
 * # tmPlay
 */
angular.module('luZhouApp')
  .directive('tmPlay', function () {
    return {
      templateUrl: 'components/tmPlay.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var toggle = 1;
        $('.toggleSideSec').click(function () {
          if (toggle === 0) {
            $('.play').hide();
            $('.playMp4').css('width', '99%');
            $('.toggleSideSec').css('right', '0');
            $(this).css('background', 'url("images/1.jpg")');
            toggle = 1
          } else {
            $('.play').show();
            $('.playMp4').css('width', '76%');
            $('.toggleSideSec').css('right', '22%');
            $(this).css('background', 'url("images/2.jpg")');
            toggle = 0
          }
        });
        // $(document).height();
        $('.playPage').css({'height': $(document).height() - 22});
        
      }
    };
  });
