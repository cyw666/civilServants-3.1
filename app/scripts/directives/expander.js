'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:expander
 * @description
 * # expander
 */
angular.module('luZhouApp')
  .directive('expander', function () {
    return {
      templateUrl: 'components/expander.html',
      restrict: 'EA',
      transclude: true,
      scope: {
        title: '=expanderTitle',
        titleClick: '=titleClick',
        channelId: '=channelId',
        name: '=name',
        ptitle:'=ptitle'
      },
      link: function (scope, element, attrs) {
        scope.showMe = false;
        if (scope.name === 'course') {
          scope.params = {channelId:scope.channelId,title: '',sort: 'Sort',order: 'desc',courseType: 'All',teacher: '',page: 1}
        }else if(scope.name === 'book'){
          scope.params ={categoryId:scope.channelId,ptitle:scope.ptitle,title: '',page: 1}
        }else if(scope.name === 'article'){
          scope.params ={categoryId:scope.channelId,search:'',page: 1,CategoryCode:''}
        }
        scope.toggle = function toggle() {
          scope.showMe = !scope.showMe;
        }
      }
    };
  });
