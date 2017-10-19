'use strict';

/**
 * @ngdoc service
 * @name luZhouApp.antiForgeryToken
 * @description
 * # antiForgeryToken
 * Service in the luZhouApp.
 */
angular.module('luZhouApp')
  .service('antiForgeryToken', function ($http,$cookies,$cookieStore,$timeout,$location,$loading,$q,$interval) {
    //防伪造请求
    this.AntiForgeryToken = function () {
      var token = new Object();
      $http({
        method:'POST',
        url:ALL_PORT.AntiForgeryToken.url,
        data:ALL_PORT.AntiForgeryToken.data,
        headers:{
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        }
      }).success(function(response){
        $('body').append('<div class="preventorgery"></div>');
        $('.preventorgery').html(response.html);
        var value = $('.preventorgery input').val();
        var name = $('.preventorgery input').attr('name');
        token[name] = value;
        $('div.preventorgery').remove();
        return token;
      });
      return token;
    }
  });
