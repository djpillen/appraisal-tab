'use strict';

// Declare app level module which depends on views, and components
var appraisalTabApp = angular.module('appraisalTab', [
  'ngRoute',
  'ngJsTree',
  'reportControllers',
  'transferBrowserControllers',
  'hollyControllers',
  'appraisalTabFilters',
  'hollyFilters',
  'appraisalTabServices',
  'hollyServices',
]);

appraisalTabApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/transfer_browser', {
        templateUrl: 'transfer_browser/transfer_browser.html',
        controller: 'TransferBrowserController'
    }).
    when('/report', {
        templateUrl: 'report/report.html',
        controller: 'ReportController'
    }).
    when('/combined', {
        templateUrl: 'combined/combined.html'
    }).
    when('/holly', {
        templateUrl: 'holly/holly.html',
        controller: 'HollyController'
    }).
    otherwise({
        redirectTo: '/combined'
    });
}]);
