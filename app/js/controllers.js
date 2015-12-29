/* Controllers */

var quillControllers = angular.module('quillControllers', ['ui.bootstrap', 'ngMdIcons', 'angular-jqcloud']);

quillControllers.controller('webHomeCtrl', ['$scope', 'Phone',
  function ($scope, Phone, $uibModal, $log, items) {
        //    $scope.phones = Phone.query();
        //    $scope.orderProp = 'age';
        $scope.isCollapsed = false;
        $scope.word = "world";

        $scope.tabs = [
            {
                title: 'Dynamic Title 1',
                content: 'Dynamic content 1'
            },
            {
                title: 'Dynamic Title 2',
                content: 'Dynamic content 2',
                disabled: true
            }
  ];

        $scope.alertMe = function () {
            setTimeout(function () {
                $window.alert('You\'ve selected the alert tab!');
            });
        };

        //Carousel code

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];
        $scope.addSlide = function () {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: ['../app/images/orange3.png', '../app/images/orange1.png', '../app/images/orange4.png', '../app/images/orange2.png'][slides.length % 4],
                text: ['A web an mobile app to extract more information from  readings', 'First, upload the files you want analyzed', 'Next, read over our summaries and analysis of the text', 'Download our mobile app to have Quill on the go and share your work with others'][slides.length % 4],
                header: ['Quill', 'Upload', 'Analyze', 'Share + Download'][slides.length % 4],
                link: ['#/account', '#/capture', '#/analyze', '#/analyze'][slides.length % 4],
                buttontext: ['Start', 'Upload', 'Analyze', 'Share'][slides.length % 4]
            });
        };
        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }

        //        //Code for a modal that's not working. Will come back to later.     
        //        $scope.items = ['item1', 'item2', 'item3'];
        //
        //        $scope.animationsEnabled = true;
        //
        //        $scope.open = function (size) {
        //            console.log("reached open");
        //            var modalInstance = $uibModal.open({
        //                animation: $scope.animationsEnabled,
        //                templateUrl: 'myModalContent.html',
        //                controller: 'ModalInstanceCtrl',
        //                size: size,
        //                resolve: {
        //                    items: function () {
        //                        return $scope.items;
        //                    }
        //                }
        //            });
        //
        //            modalInstance.result.then(function (selectedItem) {
        //                $scope.selected = selectedItem;
        //            }, function () {
        //                $log.info('Modal dismissed at: ' + new Date());
        //            });
        //        };
        //
        //        $scope.toggleAnimation = function () {
        //            $scope.animationsEnabled = !$scope.animationsEnabled;
        //        };
        //
        //        //End of modal code
  }]);


quillControllers.controller('AnalyzeCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

quillControllers.controller('CaptureCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

quillControllers.controller('AccountCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
  }]);

quillControllers.controller('analyzeDetailCtrl', ['$scope', function ($scope) {
    $scope.words = [{
            text: "Lorem",
            weight: 13
        },
        {
            text: "Ipsum",
            weight: 10.5
        },
        {
            text: "Dolor",
            weight: 9.4
        },
        {
            text: "Sit",
            weight: 8
        },
        {
            text: "Amet",
            weight: 6.2
        },
        {
            text: "Consectetur",
            weight: 5
        },
        {
            text: "Adipiscing",
            weight: 5
        }, ];
}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
quillControllers.controller('ModalDemoCtrl', ['$uibModal', '$log', 'angular-jqcloud', function ($uibModal, $log) {

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

}]);

quillControllers.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});