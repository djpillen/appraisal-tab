'use strict';

var appraisalTabServices = angular.module('appraisalTabServices', ['ngResource']);

var hollyServices = angular.module('hollyServices', []);

// Should this be its own services file? Where?
hollyServices.factory('EmailParser', ['$interpolate',
    function($interpolate) {
        // service
        return {
            parse: function(text, context) {
                var template = $interpolate(text);
                return template(context);
            }
        };
    }
]);

appraisalTabServices.factory('Transfer', ['$resource',
  function($resource) {
    return $resource('fixtures/transfers.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  }]);

appraisalTabServices.factory('File', ['Transfer',
    function(Transfer) {
      var data = Transfer.query();
      var data2 = [{
    "id": "Images-49c47319-1387-48c4-aab7-381923f07f7c",
    "parent": "#",
    "text": "Images-49c47319-1387-48c4-aab7-381923f07f7c",
    "icon": "/",
    "root": true
},
{
  "id": "objects",
  "parent": "Images-49c47319-1387-48c4-aab7-381923f07f7c",
  "text": "objects",
  "icon": "/"
},
{
  "id": "lion.svg",
  "parent": "objects",
  "text": "lion.svg",
  "icon": "file",
  "format": "fmt/91",
  "size": "5"
},
{
  "id": "799px-Euroleague-LE Roma vs Toulouse IC-27.bmp",
  "parent": "objects",
  "text": "799px-Euroleague-LE Roma vs Toulouse IC-27.bmp",
  "icon": "file",
  "format": "fmt/116",
  "size": "1.3"
},
{
  "id": "WFPC01.GIF",
  "parent": "objects",
  "text": "WFPC01.GIF",
  "icon": "file",
  "format": "fmt/4",
  "size": "8"
},
{
  "id": "Nemastylis_geminiflora_Flower.PNG",
  "parent": "objects",
  "text": "Nemastylis_geminiflora_Flower.PNG",
  "icon": "file",
  "format": "fmt/11",
  "size": "13"
},
{
  "id": "pictures",
  "parent": "objects",
  "text": "pictures",
  "icon": "/"
},
{
  "id": "MARBLES.TGA",
  "parent": "pictures",
  "text": "MARBLES.TGA",
  "icon": "file",
  "format": "fmt/402",
  "size": "18"
},
{
  "id": "Landing zone.jpg",
  "parent": "pictures",
  "text": "Landing zone.jpg",
  "icon": "file",
  "format": "fmt/43",
  "size": "0.5"
},
{
  "id": "Vector.NET-Free-Vector-Art-Pack-28-Freedom-Flight.eps",
  "parent": "objects",
  "text": "Vector.NET-Free-Vector-Art-Pack-28-Freedom-Flight.eps",
  "icon": "file",
  "format": "fmt/124",
  "size": "0.1"
},
{
  "id": "BBhelmet.ai",
  "parent": "objects",
  "text": "BBhelmet.ai",
  "icon": "file",
  "format": "fmt/19",
  "size": "5"
},
{
  "id": "G31DS.TIF",
  "parent": "objects",
  "text": "G31DS.TIF",
  "icon": "file",
  "foramt": "fmt/353",
  "size": "15"
},
{
  "id": "oakland03.jp2",
  "parent": "objects",
  "text": "oakland03.jp2",
  "icon": "file",
  "format": "x-fmt/392",
  "size": "3.5"
}];
      return {
          data: data2,
          selected: [],
          selected_records: data,
          update_selected_records: function (selected) {
            this.selected = selected;
            var data = this.data;
            console.log('selected records');
            // If no records are selected, display all records
            if (0 === selected.length) {
              this.selected_records = data;
              console.dir(this.selected_records);
              return this.selected_records;
            }
            this.selected_records = data.filter(
              function(el) { return -1 !== selected.indexOf(el.id);
            });
            console.dir(this.selected_records);
            return this.selected_records;
          }
      };
    }
  ]);
