
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



app.controller("ViewBoardsProfileCtrl", function($routeParams, $scope, BoardFactory, PinFactory) {
    $scope.boards = [];
    console.log("hi ViewBoardsProfileCtrl.js");
    PinFactory.getBoardOnlyPins($routeParams.boardId).then((results) => {
        console.log("pins boards", results);
    });
	


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