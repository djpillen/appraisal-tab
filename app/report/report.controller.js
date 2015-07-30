'use strict';

(function() {
  angular.module('reportController', ['selectedFilesService']).

  controller('ReportController', ['$scope', 'FileList', 'SelectedFiles', function($scope, FileList, SelectedFiles) {
    $scope.records = SelectedFiles;

    $scope.format_sort_property = 'format';
    $scope.format_reverse = false;
    $scope.format_sort_fn = function(record) {
      var sort_prop = $scope.format_sort_property;
      if (sort_prop === 'puid') {
        return record.puid;
      } else {
        return record.data[sort_prop];
      }
    };

    $scope.set_sort_property = function(property, sort_prop, reverse_prop) {
      if ($scope[sort_prop] === property) {
        $scope[reverse_prop] = !$scope[reverse_prop];
      } else {
        $scope[reverse_prop] = false;
        $scope[sort_prop] = property;
      }
    };

    $scope.tag_sort_property = 'tag';
    $scope.tag_reverse = false;
    $scope.tag_sort_fn = function(args) {
      var tag = args[0], count = args[1];
      return $scope.tag_sort_property === 'tag' ? tag : count;
    }

    $scope.set_file_list = function(record) {
      var type = record.puid;
      FileList.files = SelectedFiles.selected.filter(function(file) {
        return file.puid == type;
      });
    };

    $scope.add_tags_to_file_list = function(tag) {
      FileList.files = SelectedFiles.selected.filter(function(file) {
        return file.tags.indexOf(tag) > -1;
      });
    };
  }]);
})();
