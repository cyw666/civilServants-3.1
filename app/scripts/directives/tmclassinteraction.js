'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmClassInteraction
 * @description
 * # tmClassInteraction
 */
angular.module('luZhouApp')
  .directive('tmClassInteraction', function () {
    return {
      templateUrl: 'components/tmClassInteraction.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        //点击评论
        scope.commentClick = function (event) {
          $(event.target).parent('.bottom').siblings('.commentForm').slideToggle();
          $(event.target).parent('.bottom').siblings('.commentForm').find('textarea').val("");
        }
        //点击回复
        scope.replyClick = function (event) {
          $(event.target).parents('.commentList').find('.replyForm').slideToggle();
          $(event.target).parents('.commentList').siblings('.commentList').find('.replyForm').slideUp();
        }
        //展开折叠
        scope.foldUnfold = function (event) {
          $(event.target).html() == "点击查看" ? $(event.target).html("点击收起") : $(event.target).html("点击查看")
          $(event.target).parents('.foldUnfold').prevAll('.commentList').slice(0,-2).slideToggle();
        }
      }
    };
  });
