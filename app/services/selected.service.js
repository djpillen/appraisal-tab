import angular from 'angular';

angular.module('selectedFilesService', []).

service('SelectedFiles', [function() {
  return {
    add: function(file) {
      // Remove any occurrences of this file if they already exist
      this.remove(file.id);
      this.selected.push(file);
    },
    remove: function(uuid) {
      this.selected = this.selected.filter(function(el) {
        return el.id !== uuid;
      });
    },
    list_file_ids: function() {
      var ids = [];
      angular.forEach(this.selected, function(file) {
        if (file.type === 'file') {
          ids.push(file.id);
        }
      });
      return ids;
    },
    // TODO: look at optimizing file lookup-by-id if this gets used a lot
    get: function(id) {
      for (var i = 0; i < this.selected.length; i++) {
        var item = this.selected[i];
        if (item.id === id) {
          return item;
        }
      }
    },
    selected: [],
  };
}]);
