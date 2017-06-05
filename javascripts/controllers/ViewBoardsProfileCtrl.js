app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, PinFactory, $rootScope){

    $scope.selectedPin={};
    $scope.boards = [];
    PinFactory.getBoardOnlyPins($routeParams.boardId)
    .then((results) => {
        return PinFactory.getSinglePin(results[0].id);
        }).then((singlePin)=>{
            $scope.selectedPin = singlePin.data;
    })
    .catch((error)=>{
        console.log("error in ViewBoardsProfileCtrl",error);
    });
	
});


