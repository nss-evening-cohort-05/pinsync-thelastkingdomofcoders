app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, PinFactory, $rootScope){
	$scope.pin = [];
	console.log("hi ViewBoardsProfileCtrl.js");
	
	let getPinsForBoard = () => {
		console.log("inside getPinsForBoard");
        PinFactory.displayPinsInBoard($scope.pin.boardId)
            .then((pinz) => {
                console.log("results boards", pinz);
                // $scope.pins = pinz;
            }).catch((error) => {
                console.log("error in getPinsForBoard", error);
            });
    };

    getPinsForBoard();


	
});


