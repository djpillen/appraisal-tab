'use strict';

var reportControllers = angular.module('reportControllers', []);

reportControllers.controller('ReportController', ['$scope', 'File',
  function($scope, File) {
    $scope.records = File.selected_records;
  }]);
