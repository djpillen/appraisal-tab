'use strict';

var reportControllers = angular.module('reportControllers', []);

reportControllers.controller('ReportController', ['$scope', 'Transfer',
  function($scope, Transfer) {
    $scope.records = Transfer.query();
  }]);
