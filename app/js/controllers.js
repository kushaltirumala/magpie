'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['ui.bootstrap']);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('webHomeCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('AnalyzeCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('CaptureCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('AnalyzeCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.singleModel = 1;

        $scope.radioModel = 'Middle';

        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };

        $scope.checkResults = [];

        $scope.$watchCollection('checkModel', function () {
            $scope.checkResults = [];
            angular.forEach($scope.checkModel, function (value, key) {
                if (value) {
                    $scope.checkResults.push(key);
                }
            });
        });
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({
            phoneId: $routeParams.phoneId
        }, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
  }]);