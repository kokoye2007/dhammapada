'use strict';

/**
 * @ngdoc function
 * @name dhammapadaApp.controller:ChapterCtrl
 * @description
 * # ChapterCtrl
 * Controller of the dhammapadaApp
 */
angular.module('dhammapadaApp')
  .controller('ChapterCtrl', function ($scope, $routeParams, dataProvider) {
    var getVerse = function(chapter, verse) {
       var pars = chapter.Chapter.Verses.Verse;
       for(var i = 0; i < pars.length; i++) {
          var para = pars[i];
          // 2 cases.. This verse has multiple paragraph..
          // Or only 1.
          if (angular.isArray(para.Paragraphs.Par)) {
            for(var j = 0; j < para.Paragraphs.Par.length; j++) {
              if (para.Paragraphs.Par[j].Nr == verse) {
                // We found it!
                $scope.Paragraph = para;
                $scope.Txt = para.Paragraphs.Par[j].Txt;
              }
            }
          } else {
            // In case of 1..
            if (para.Paragraphs.Par.Nr == verse) {
              // We found it!
              $scope.Paragraph = para;
              $scope.Txt = para.Paragraphs.Par.Txt;
            }
          }
       }
    };

    dataProvider.Chapter.get( { chapter : $routeParams.chapter },
                           function(c) {
                             $scope.chapter = c;
                             getVerse(c, $routeParams.verse);
                           });
    $scope.verse = $routeParams.verse;
  });
