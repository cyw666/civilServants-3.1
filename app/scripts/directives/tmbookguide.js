'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:tmBookGuide
 * @description
 * # tmBookGuide
 */
angular.module('luZhouApp')
  .directive('tmBookGuide', function () {
    return {
      templateUrl: 'components/tmBookGuide.html',
      restrict: 'EA',
      controller: function ($scope, commonService, $loading) {
        //电子图书
        $loading.start('bookList');
        commonService.getData(ALL_PORT.BookList.url,'POST',ALL_PORT.BookList.data)
          .then(function(response) {
            $loading.finish('bookList');
            $scope.booksData = response.Data;
            $scope.imgPath = response.Data.Path;
          });
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
