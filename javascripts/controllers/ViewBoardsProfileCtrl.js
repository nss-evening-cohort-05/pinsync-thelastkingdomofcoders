
app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, BoardFactory, PinFactory) {
    $scope.boards = [];
    console.log("hi ViewBoardsProfileCtrl.js");
    PinFactory.getBoardOnlyPins($routeParams.boardId).then((results) => {
        console.log("pins boards", results);
    });
	
// 	let getPinsForBoard = () => {
// 		console.log("inside getPinsForBoard");
//         PinFactory.displayPinsInBoard($scope.pin.boardId)
//             .then((pinz) => {
//                 console.log("results boards", pinz);
//                 // $scope.pins = pinz;
//             }).catch((error) => {
//                 console.log("error in getPinsForBoard", error);
//             });
//     };

//     getPinsForBoard();


	



});