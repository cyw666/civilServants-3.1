'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmStarBox
 * @description
 * # tmStarBox
 */
angular.module('luZhouApp')
  .directive('tmStarBox', function () {
    return {
      require: '?ngModel', // ?ngModel
      restrict: 'EA',
      templateUrl: 'components/tmStarBox.html',
      scope: {
        ngModel: '='
      },
      link: function ($scope, element, attrs, ngModel) {
        $scope.myStars = [1, 2, 3, 4, 5];
        var word = ['', '很差', '差', '一般', "好", "很好"];
        $scope.ratingText = '';
        $scope.clickCnt = 0;
        $scope.$watch('ngModel', function (newValue) {
          var dataList = newValue;
          if (!dataList) return;
          $scope.myStar = dataList;
          $scope.clickCnt = dataList;
          $scope.ratingText = word[dataList];
        })
        $scope.stars = function (myStar) {
          $scope.clickCnt = myStar;
          ngModel.$setViewValue(myStar);
        }
        
        $scope.mouseoverStar = function (myStar) {
          $scope.hoverCnt = myStar;
        }
        $scope.mouseleaveStar = function (myStar) {
          $scope.hoverCnt = 0;
        }
      }
    }
  });
