'use strict';

// Declare app level module which depends on views, and components
angular.module('appraisalTab', [
  'angularCharts',
  'restangular',
  'appraisalTab.version',
  'archivesSpaceService',
  'facetService',
  'selectedFilesService',
  'transferService',
  'fileService',
  'facetFilter',
  'aggregationFilters',
  'treeView',
  'facetController',
  'reportController',
  'treeController',
  'visualizationsController',
]).config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/app/fixtures');
});
