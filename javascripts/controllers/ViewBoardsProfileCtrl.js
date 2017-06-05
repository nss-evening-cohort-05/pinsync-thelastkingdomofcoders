app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, BoardFactory, PinFactory, $rootScope){
	$scope.pin = [];
    $scope.boards = [];


	// let getPinsForBoard = (boardId) => {
 //        PinFactory.getPinList($routeParams.id)
 //            .then((pinz) => {
 //                console.log("results boards", pinz);
 //                $scope.pins = pinz;
 //            }).catch((error) => {
 //                console.log("error in getPinsForBoard", error);
 //            });
 //    };

 //    getPinsForBoard();


///// ELLIS GIT git TEST FOR GET BOARDS ///////////

    let getBoards = () => {

        BoardFactory.displayUserBoards($rootScope.user.uid)
        .then((boardz) => {
            $scope.boards = boardz;
            for (let i=0; i<$scope.boards.length; i++) {
                getPins($scope.boards[i].uid);
            }

        })

        .catch((error) => {
            console.log("error on getBoardList", error);
        });
    };


    let getPins = (boardId) => {
        PinFactory.getPinList($routeParams.id)
        .then((pinz) => {
            $scope.pins = pinz;
            console.log("pinz", pinz);
        })
        .catch((error) => {
            console.log("error on getPins", error);
        });
    };

///////END OF TEST /////////////////

    getBoards();
	
});


