
/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['ui.bootstrap']);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('webHomeCtrl', ['$scope', 'Phone',
  function ($scope, Phone, $uibModal, $log, $modalInstance, items, $uibModal, $log) {
        //    $scope.phones = Phone.query();
        //    $scope.orderProp = 'age';
        $scope.isCollapsed = false;
        $scope.word = "world";
        
     $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
      
      
  //Code for a modal that's not working. Will come back to later.     
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
//End of modal code
  }]);
//A controller for a modal. Didn't get it to work will return to it later. 
phonecatControllers.controller('ModalInstanceCtrl', ['$scope', 'Phone', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
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