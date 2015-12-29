/* App Module */
var quillApp = angular.module('quillApp', [
  'ngRoute',
  'quillAnimations',
  'quillControllers',
  'quillFilters',
  'quillServices',
    'ngMdIcons',
    'ui.bootstrap'
]);

quillApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/webHome', {
            templateUrl: 'partials/webHome.html',
            controller: 'webHomeCtrl'
        }).
        when('/analyze', {
            templateUrl: 'partials/analyze.html',
            controller: 'AnalyzeCtrl'
        }).
        when('analyze/:analyzeId', {
            templateUrl: 'partials/analyze-detail.html',
            controller: 'analyzeDetailCtrl'
        }).
        when('/capture', {
            templateUrl: 'partials/capture.html',
            controller: 'CaptureCtrl'
        }).
        when('/account', {
            templateUrl: 'partials/account.html',
            controller: 'AccountCtrl'
        }).
        otherwise({
            redirectTo: '/webHome'
        });
  }]);