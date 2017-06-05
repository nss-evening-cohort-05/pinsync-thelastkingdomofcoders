app.controller("EditPinCtrl", function($location, $routeParams, $scope, PinFactory, BoardFactory) {
  $scope.address = {};

  PinFactory.getSinglePin($routeParams.url).then((results) => {
    $scope.pin = results.data;
    console.log("getSinglePin $scope.newPin", $scope.pin);
  }).catch((error) => {
  	console.log("getSinglePin error", error);
  });


  $scope.postNewPin = () => {
  	PinFactory.editPin($scope.pin).then(() => {
  		$location.url("/home");
  	}).catch((error) => {
  		console.log("editItem error", error);
  	});
  };



});
