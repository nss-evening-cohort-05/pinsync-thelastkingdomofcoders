app.controller("EdiPintCtrl", function($location, $routeParams, $scope, PinFactory) {
  $scope.address = {};

  PinFactory.getSinglePin($routeParams.id).then((results) => {
    $scope.pin = results.data;
    console.log("getSinglePin $scope.newPin", $scope.pin);
  }).catch((error) => {
  	console.log("getSinglePin error", error);
  });

  $scope.postNewPin = () => {
// Need to pass in the boardId    
  	PinFactory.editPin($scope.pin).then(() => {

// Need to decide if we return to board or list view
  		// $location.url("/list");
  	}).catch((error) => {
  		console.log("editItem error", error);
  	});
  };

});
