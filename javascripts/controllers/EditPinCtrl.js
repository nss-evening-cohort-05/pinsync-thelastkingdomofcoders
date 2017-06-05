app.controller("EditPinCtrl", function($location, $routeParams, $scope, PinFactory, BoardFactory) {
  $scope.address = {};

  PinFactory.getSinglePin($routeParams.url).then((results) => {
    $scope.pin = results.data;
    console.log("getSinglePin $scope.newPin", $scope.pin);
  }).catch((error) => {
  	console.log("getSinglePin error", error);
  });

  BoardFactory.getSingleBoard($routeParams.id).then((results) => {
    console.log("results", results);
    $scope.board = results.data;
    console.log("getSingleBoard $scope.newBoard", $scope.board);
  }).catch((error) => {
    console.log("getSingleBoard error", error);
  });

  $scope.postNewPin = () => {
  	PinFactory.editPin($scope.pin).then(() => {
  		$location.url("/home");
  	}).catch((error) => {
  		console.log("editItem error", error);
  	});
  };

  $scope.pinToBoard = () => {
    PinFactory.editPin($scope.board).then(() => {
      $location.url("/home");
    }).catch((error) => {
      console.log("editItem error", error);
    });
  };


});
