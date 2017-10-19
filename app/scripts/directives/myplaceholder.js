'use strict';

/**
 * @ngdoc directive
 * @name luZhouApp.directive:myPlaceholder
 * @description
 * # myPlaceholder
 */
angular.module('luZhouApp')
  .directive('myPlaceholder', function ($compile) {
    return {
      restrict: 'A',
      scope: {},
      link: function(scope, ele, attr) {
        var input = document.createElement('input');
        var isSupportPlaceholder = 'placeholder' in input;
        if (!isSupportPlaceholder) {
          var fakePlaceholder = angular.element(
            '<span class="placeholder">' + attr['placeholder'] + '</span>');
          fakePlaceholder.on('click', function(e){
            e.stopPropagation();
            ele.focus();
          });
          ele.before(fakePlaceholder);
          $compile(fakePlaceholder)(scope);
          ele.on('focus', function(){
            fakePlaceholder.hide();
          }).on('blur', function(){
            if (ele.val() === '') {
              fakePlaceholder.show();
            }
          });
          scope.getElementPosition = function() {
            return ele.position();
          };
          scope.$watch(scope.getElementPosition, function(){
            fakePlaceholder.css({
              'top': ele.position().top + 'px',
              'left': ele.position().left + 'px'
            });
          }, true);
          scope.getElementHeight = function() {
            return ele.outerHeight();
          };
          scope.$watch(scope.getElementHeight, function(){
            fakePlaceholder.css('line-height', ele.outerHeight() + 'px');
          });
          if (ele.css('font-size')){
            fakePlaceholder.css('font-size', ele.css('font-size'));
          }
          if (ele.css('text-indent')){
            fakePlaceholder.css('text-indent',
              parseInt(ele.css('text-indent')) +
              parseInt(ele.css('border-left-width'))
            );
          }
          if (ele.css('padding-left')){
            fakePlaceholder.css('padding-left', ele.css('padding-left'));
          }
          if (ele.css('margin-top')){
            fakePlaceholder.css('margin-top', ele.css('margin-top'));
          }
          scope.isElementVisible = function(){
            return ele.is(':visible');
          };
          scope.$watch(scope.isElementVisible, function(){
            var displayVal = ele.is(':visible') ? 'block' : 'none';
            fakePlaceholder.css('display', displayVal);
            if (displayVal === 'blcok' && ele.val()) {
              fakePlaceholder.hide();
            }
          });
          scope.hasValue = function(){
            return ele.val();
          };
          scope.$watch(scope.hasValue, function(){
            if (ele.val()) {
              fakePlaceholder.hide();
            }
          });

        }


      }
    };
  });
