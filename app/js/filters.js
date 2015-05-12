'use strict';

angular.module('appraisalTabFilters', []).filter('puid_data', function() {
  return _.memoize(function(records) {
      var puid_data = {};
      for (var i in records) {
        var record = records[i];
        if (!record.format)
          continue;
  
        if (!puid_data[record.format])
          puid_data[record.format] = {count: 0, size: 0};
  
        puid_data[record.format].count++;
        puid_data[record.format].size += Number.parseFloat(record.size);
      }
  
      var out_data = [];
      for (var key in puid_data) {
        out_data.push({puid: key, data: puid_data[key]});
      }
  
      return out_data;
    });
});

angular.module('hollyFilters', []).filter('capitalize', function() {
  return function(input) {
    if (input) {
      return input[0].toUpperCase() + input.slice(1);
    }
  };
});
