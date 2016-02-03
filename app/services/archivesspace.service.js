import angular from 'angular';
import {decode_browse_response, format_entries} from 'archivematica-browse-helpers';
import Base64 from 'base64-helpers';
import $ from 'jquery';
import 'lodash';
import 'restangular';

angular.module('archivesSpaceService', ['restangular']).

factory('ArchivesSpace', ['Restangular', function(Restangular) {
    var id_to_urlsafe = id => {
      return id.replace(/\//g, '-');
    };

    var ArchivesSpace = Restangular.all('access').all('archivesspace');
    return {
      all: function() {
        return ArchivesSpace.getList();
      },
      get: function(id) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).get();
      },
      get_by_accession: function(accession) {
        return ArchivesSpace.one('accession').one(accession).getList();
      },
      get_children: function(id) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('children').getList();
      },
      get_levels_of_description: function() {
        return ArchivesSpace.one('levels').getList();
      },
      edit: function(id, record) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).customPUT(record);
      },
      add_child: function(id, record) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('children').customPOST(record);
      },
      create_directory: function(id) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('create_directory_within_arrange').customPOST();
      },
      digital_object_components: function(id) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('digital_object_components').get();
      },
      create_digital_object_component: function(id, record) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('digital_object_components').customPOST(record);
      },
      edit_digital_object_component: function(id, record) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('digital_object_components').customPUT(record);
      },
      list_digital_object_component_contents: function(id, component_id) {
        var id_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(id_fragment).one('digital_object_components').one(String(component_id)).one('files').get().then(decode_browse_response).then(format_entries);
      },
      copy_to_arrange: function(id, filepath) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).customPOST(
          $.param({filepath: Base64.encode(filepath)}),
          'copy_to_arrange',
          {},
          {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        );
      },
      list_arrange_contents: function(id, parent) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('contents').one('arrange').get(url_fragment).then(decode_browse_response).then(data => {
          let entries = format_entries(data, parent.path, parent);
          entries.forEach(entry => entry.type = 'arrange_entry');
          return entries;
        });
      },
      remove: function(id) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).remove();
      },
      start_sip: function(id) {
        var url_fragment = id_to_urlsafe(id);
        return ArchivesSpace.one(url_fragment).one('copy_from_arrange').post();
      },
    };
}]);
