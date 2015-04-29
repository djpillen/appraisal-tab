'use strict';

// Declare app level module which depends on views, and components
var appraisalTabApp = angular.module('appraisalTab', [
  'ngRoute',
  'ngJsTree',
  'reportControllers',
  'transferBrowserControllers',
  'appraisalTabFilters',
  'appraisalTabServices'
])

appraisalTabApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/transfer_browser', {
        templateUrl: 'transfer_browser/transfer_browser.html',
        controller: 'TransferBrowserCtrl'
    }).
    when('/report', {
        templateUrl: 'report/report.html',
        controller: 'ReportCtrl'
    }).
    when('/combined', {
        templateUrl: 'combined/combined.html'
    }).
    otherwise({
        redirectTo: '/report'
    });
}]);
