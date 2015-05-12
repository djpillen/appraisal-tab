'use strict';

var transferBrowserControllers = angular.module('transferBrowserControllers', []);

transferBrowserControllers.controller('TransferBrowserController', ['$scope', 'Transfer', 'File',
  function($scope, Transfer, File) {
    $scope.treeConfig = {
        "plugins": [ "checkbox" ]
    };
    $scope.selectCB = function(node, selected, event) {
        File.update_selected_records(selected.selected);
    };
    // un-hardcode this later
    // Want to do something similar to $scope.treeData = Transfer.query(), but that's causing the JS to freeze (!)
    $scope.treeData = File.data;
  }]);
