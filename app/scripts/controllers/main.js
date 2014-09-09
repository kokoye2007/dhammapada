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
  dataProvider.Dhammapada.then(function(d) { $scope.Book = d; });
});
