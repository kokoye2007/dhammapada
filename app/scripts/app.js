'use strict';

/**
 * @ngdoc overview
 * @name dhammapadaApp
 * @description
 * # dhammapadaApp
 *
 * Main module of the application.
 */
angular
  .module('dhammapadaApp', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
