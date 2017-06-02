app.controller("NewPinCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, PinFactory) {

  $scope.addNewPin = () => {
  	console.log("$scope.newPin in addNewPin", $scope.newPin);
  	$scope.newPin.boardId = "";
    $scope.newPin.uid = $rootScope.user.uid;
    PinFactory.postNewPin($scope.newPin).then((response) => {
      $scope.newPin = {};
      $location.url("/home");
    }).catch((Error) => {
      console.log("Add error", error);
    });
  };

});
