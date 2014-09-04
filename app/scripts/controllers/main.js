'use strict';

/**
 * @ngdoc function
 * @name dhammapadaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dhammapadaApp
 */
angular.module('dhammapadaApp')
.controller('MainCtrl', function ($scope, dataProvider) {
  $scope.Book = dataProvider.Dhammapada.get();
});
