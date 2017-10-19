'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmpersonallearninginfo
 * @description
 * # tmPersonalLearningInfo
 */
angular.module('luZhouApp')
  .directive('tmPersonalLearningInfo', function () {
    return {
      templateUrl: 'components/tmPersonalLearningInfo.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        //个人学习信息
        commonService.getData(ALL_PORT.ClassInformation.url, 'POST',
          $.extend({}, ALL_PORT.ClassInformation.data, {Id: $scope.Id}))
          .then(function (response) {
            $loading.finish('personalLearningInfo');
            $scope.classInfoData = response.Data;
          });
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
