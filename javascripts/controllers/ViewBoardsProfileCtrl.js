app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, BoardFactory, PinFactory) {
   	$scope.selectedBoard = {};
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
	
	// let getPinsForBoard = () => {
	// 	console.log("inside getPinsForBoard");
 //        PinFactory.displayPinsInBoard($scope.pin.boardId)
 //            .then((pinz) => {
 //                console.log("results boards", pinz);
 //                // $scope.pins = pinz;
 //            }).catch((error) => {
 //                console.log("error in getPinsForBoard", error);
 //            });
 //    };

 //    getPinsForBoard();



///// ELLIS  TEST FOR GET BOARDS ///////////

//     let getBoards = () => {

//         BoardFactory.displayUserBoards($rootScope.user.uid)
//         .then((boardz) => {
//             $scope.boards = boardz;
//             for (let i=0; i<$scope.boards.length; i++) {
//                 getPins($scope.boards[i].uid);
//             }

//         })

//         .catch((error) => {
//             console.log("error on getBoardList", error);
//         });
//     };

     
    BoardFactory.getSingleBoard($routeParams.boardId)
    .then((results) =>{
        $scope.selectedBoard= results.data;
    }).catch((error) => {
        console.log("getSingleItem error", error);
    });

	$scope.addNewBoard = () => {
		BoardFactory.editBoard($scope.newBoard).then(() => {
			$location.url('/viewBoard');
		}).catch((error) =>{
			console.log("editBoard", error);
		});
	};

// app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, BoardFactory, PinFactory) {
//     $scope.boards = [];
//     console.log("hi ViewBoardsProfileCtrl.js");
//     PinFactory.getBoardOnlyPins($routeParams.boardId).then((results) => {
//         console.log("pins boards", results);
//     });
	


//     let getPins = (boardId) => {
//         PinFactory.getPinList($routeParams.id)
//         .then((pinz) => {
//             $scope.pins = pinz;
//             console.log("pinz", pinz);
//         })
//         .catch((error) => {
//             console.log("error on getPins", error);
//         });
//     };

// ///////END OF TEST /////////////////

//     getBoards();
	


});