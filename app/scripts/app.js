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
    'ngTouch',
    'services.dataProvider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/chapter/:chapter/verse/:verse', {
        templateUrl: 'views/chapter.html',
        controller: 'ChapterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
