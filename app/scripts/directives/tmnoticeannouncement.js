'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmNoticeAnnouncement
 * @description
 * # tmNoticeAnnouncement
 */
angular.module('luZhouApp')
  .directive('tmNoticeAnnouncement', function () {
    return {
      templateUrl: 'components/tmNoticeAnnouncement.html',
      restrict: 'EA',
      scope:{
        noticeData:'=',
        repeatFinish:'=',
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
