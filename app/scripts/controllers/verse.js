'use strict';

/**
 * @ngdoc function
 * @name dhammapadaApp.controller:ChapterCtrl
 * @description
 * # ChapterCtrl
 * Controller of the dhammapadaApp
 */
angular.module('dhammapadaApp')
  .controller('VerseCtrl', function ($scope, $routeParams, dataProvider) {
    dataProvider.Verse($routeParams.verse).then( function(v) {
        $scope.verse = v;
        $scope.prev = v.nr - 1;
        if ($scope.prev < 1) 
          $scope.prev = 423;
        $scope.next = v.nr + 1;
        if ($scope.next > 423) 
          $scope.next = 1;
    });
    $scope.story = false;
    $scope.togglestory = function() { $scope.story = !$scope.story; };
  });
