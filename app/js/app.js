/* App Module */
var quillApp = angular.module('quillApp', [
  'ngRoute',
  'quillAnimations',
  'quillControllers',
  'quillFilters',
  'quillServices'
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