app.controller("NewPinCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, PinFactory) {

  $scope.addNewPin = () => {
    PinFactory.postNewPin($scope.newPin).then((response) => {
      $scope.newPin = {};
      $location.url("/home");
    }).catch((Error) => {
      console.log("Add error", error);
    });
  };

});
