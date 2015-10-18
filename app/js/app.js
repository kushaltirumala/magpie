
/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);
//.run(function ($rootScope) {
//Parse.initialize("FAs7XLJDkIIkJXvHx3Z0UqLvxxKwNJ8VUpJfBDej", "cUbsuBR1F3E6pCyMecLQIRtEJDQcLHtjxuTp2Qri");
//
//    var currentUser = Parse.User.current();
//    currentUser = null;
//    $rootScope.user = null;
//    $rootScope.isLoggedIn = false;
//
//    if (currentUser) {
//        $rootScope.user = currentUser;
//        $rootScope.isLoggedIn = true;
//        $state.go('tab.dash');
//    }
//}
phonecatApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        when('/webHome', {
            templateUrl: 'partials/webhome.html',
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
            redirectTo: '/phones'
        });
  }]);