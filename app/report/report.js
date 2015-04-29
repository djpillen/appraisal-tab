'use strict';

var reportControllers = angular.module('reportControllers', []);

reportControllers.controller('ReportCtrl', ['$scope', 'Transfer',
  function($scope, Transfer) {
    $scope.records = Transfer.query();
  }]);
