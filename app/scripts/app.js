'use strict';
angular.module('confusionApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contactus',{
      templateUrl:'contactUs.html',
      controller:'ContactController'
    })
    .when('/menu',{
        templateUrl:'menu.html',
        controller:'MenuController'
    })
    .when('/menu/:id',{
       templateUrl:'dishDetails.html',
        controller:'DishDetailController'
    });
//    otherwise('/contactus');
  });
