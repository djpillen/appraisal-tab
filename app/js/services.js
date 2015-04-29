'use strict';

var appraisalTabServices = angular.module('appraisalTabServices', ['ngResource']);

appraisalTabServices.factory('Transfer', ['$resource',
  function($resource) {
    return $resource('fixtures/transfers.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }]);

appraisalTabServices.factory('File', ['Transfer',
    function(Transfer) {
    var data = Transfer.query();
    return {
        data: data,
        selected: [],
        selected_records: data,
        update_selected_records: function (selected) {
          this.selected = selected;
          var data = this.data;
          // If no records are selected, display all records
          if (0 === selected.length) {
            this.selected_records = data;
            return;
          }
          this.selected_records = data.filter(
            function(el) { return -1 !== selected.indexOf(el.id);
          });
        }
    }
  }]);
